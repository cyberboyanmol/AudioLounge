import axios, { AxiosInstance, AxiosResponse } from "axios";
import { HttpRequestGenericError, HttpRequestype } from "./types";
const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  withCredentials: true,
};

const api: AxiosInstance = axios.create({ headers: defaultHeaders });

const HttpRequest = async ({
  method = "GET",
  showActual = false,
  ...config
}: HttpRequestype): Promise<AxiosResponse<any, any>> => {
  if (config.url) {
    try {
      const response = await api({
        method,
        ...config,
      });
      return Promise.resolve(response);
    } catch (err) {
      const errors = err as HttpRequestGenericError;
      if (errors.response?.data && !showActual) {
        //
        console.log(errors.response.data, "error.response.data");
      }
      return Promise.reject(errors);
    }
  }
  return Promise.reject({ message: "API URL is not defined" });
};

export default HttpRequest;
