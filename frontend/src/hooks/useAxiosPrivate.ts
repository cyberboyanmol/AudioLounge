import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";
import { RootState } from "@/store";
import { useEffect } from "react";
import axios, { InternalAxiosRequestConfig } from "axios";

const baseURL = "http://localhost:5000";

export const axiosPrivate = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const accessToken = useSelector<RootState>((state) => state.auth.accessToken);

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
      (response) => response.data,
      async (error) => {
        const originalRequest = error?.config;
        if (error?.response.status === 403 && !originalRequest.sent) {
          originalRequest.sent = true;
          const newAccessToken = refresh();

          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(originalRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refresh]);
  return axiosPrivate;
};

export default useAxiosPrivate;
