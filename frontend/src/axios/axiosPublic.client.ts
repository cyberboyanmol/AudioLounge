// import { axiosPrivate } from "@/hooks/useAxiosPrivate";
import { SendOtpProps, verifyOtpProps } from "@/types";
import axios, { InternalAxiosRequestConfig } from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

const publicClient = axios.create({
  baseURL: `${baseURL}/api/v1/`,
  withCredentials: true,
});

publicClient.interceptors.request.use(
  async (config) => {
    return {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    };
  },
  (error) => {
    throw error;
  }
);

publicClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response;
    return response;
  },
  (error) => {
    throw error;
  }
);

// List of all the endpoints
// export const sendOtp = (T: SendOtpProps) => publicClient.post("/auth/login", T);

export function sendOtp<T extends object>(data: T) {
  return publicClient.post("/auth/login", data);
}
export function verifyOtp<T extends object>(data: T) {
  return publicClient.post("/auth/verify-otp", data);
}
// export function getInfo() {
//   return axiosPrivate.get("/auth/verify-otp");
// }

export default publicClient;
