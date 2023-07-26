import {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  HeadersDefaults,
} from "axios";

export interface HttpRequestype extends AxiosRequestConfig {
  showActual?: boolean;
  override?: boolean;
}

export type HttpRequestHeader =
  | AxiosHeaders
  | string
  | string[]
  | number
  | boolean
  | null;

export interface HttpRequestDefaultHeader extends HeadersDefaults {
  Authorization?: string;
  Accept?: "application/json";
  "Content-Type"?: "application/json";
}

export type HttpRequestGenericError = AxiosError;
