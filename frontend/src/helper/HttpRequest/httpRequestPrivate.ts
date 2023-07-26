import store from "@/store";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import RefreshToken from "../refreshToken";
import { HttpRequestype } from "./types";
const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  withCredentials: true,
};

const api: AxiosInstance = axios.create({ headers: defaultHeaders });

const HttpRequestPrivate = async ({
  method = "GET",
  showActual = false,
  ...config
}: HttpRequestype) => {
  const accessToken = store.getState().accessToken.accessToken as string;
  let isRefreshing: boolean = false;
  const failedRequestQueue: Array<{
    resolve: (token: string) => void;
    reject: (error: any) => void;
  }> = [];

  const processQueue = (error: any, token: string | null = null) => {
    failedRequestQueue.forEach((request) => {
      if (error) {
        request.reject(error);
      } else {
        request.resolve(token as string);
      }
    });
    failedRequestQueue.length = 0;
  };

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (
        error.response &&
        error.response.status === 401 &&
        originalRequest &&
        !originalRequest._isRetry
      ) {
        if (isRefreshing) {
          try {
            const newAccessToken = await new Promise<string>(
              (resolve, reject) => {
                failedRequestQueue.push({ resolve, reject });
              }
            );
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken}`;
            return api(originalRequest);
          } catch (error) {
            return Promise.reject(error);
          }
        }

        originalRequest._isRetry = true;
        isRefreshing = true;
        try {
          const newAccessToken = await RefreshToken();
          processQueue(null, newAccessToken);
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
          failedRequestQueue.length = 0;
        }
      }
      return Promise.reject(error);
    }
  );

  try {
    const response = await api.request({ method, ...config });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default HttpRequestPrivate;
