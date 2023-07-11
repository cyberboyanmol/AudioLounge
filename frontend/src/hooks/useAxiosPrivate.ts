import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";
import { RootState } from "@/store";
import { useEffect, useState, useRef } from "react";

import axios, { InternalAxiosRequestConfig } from "axios";
const baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

// const baseURL = "http://localhost:5000/api/v1/";

export const axiosPrivate = axios.create({
  baseURL: `${baseURL}/api/v1`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const useAxiosPrivate = () => {
  const accessToken = useSelector<RootState>((state) => state.accessToken.accessToken);

  const isRefreshing = useRef(false);
  const failedQueue = useRef([]);

  const refresh = useRefreshToken();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (
          error.response.status === 401 &&
          originalRequest &&
          !originalRequest._retry
        ) {
          if (isRefreshing.current) {
            return new Promise((resolve, reject) => {
              failedQueue.current.push({ resolve, reject });
            })
              .then((newAccessToken) => {
                originalRequest.headers[
                  "Authorization"
                ] = `Bearer ${newAccessToken}`;
                return axiosPrivate(originalRequest);
              })
              .catch((err) => {
                return Promise.reject(err);
              });
          }

          originalRequest._retry = true;
          isRefreshing.current = true;

          return new Promise((resolve, reject) => {
            refresh()
              .then((newAccessToken) => {
                originalRequest.headers[
                  "Authorization"
                ] = `Bearer ${newAccessToken}`;
                processQueue(null, newAccessToken);
                resolve(axiosPrivate(originalRequest));
              })
              .catch((err) => {
                processQueue(err, null);
                reject(err);
              })
              .finally(() => {
                isRefreshing.current = false;
              });
          });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refresh]);

  const processQueue = (error, token = null) => {
    failedQueue.current.forEach((promise) => {
      if (error) {
        promise.reject(error);
      } else {
        promise.resolve(token);
      }
    });

    failedQueue.current = [];
  };

  return axiosPrivate;
};

export default useAxiosPrivate;
