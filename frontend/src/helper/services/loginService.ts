import {
  SendOtpProps,
  authSliceInitialProps,
  verifyOtpProps,
  verifySliceInitialProps,
} from "@/types";
import { HttpRequestGenericError, HttpRequestype } from "../HttpRequest/types";
import ServiceConfig from "../serviceConfig";
import HttpRequest from "../HttpRequest";
import { AxiosResponse } from "axios";
import HttpRequestPrivate from "../HttpRequest/httpRequestPrivate";
import { ActivateAccount } from "@/types/userTypes";

const login = async (data: SendOtpProps) => {
  const requestOptions: HttpRequestype = {
    url: ServiceConfig.loginEndPoint,
    data,
    method: "POST",
    showActual: true,
  };
  try {
    const response = await HttpRequest(requestOptions);
    return { response };
  } catch (errors) {
    return { errors };
  }
};

const verifyOtp = async (data: verifyOtpProps) => {
  const requestOptions: HttpRequestype = {
    url: ServiceConfig.verifyEndPoint,
    data,
    method: "POST",
    showActual: true,
    withCredentials: true,
  };

  try {
    const response = await HttpRequest(requestOptions);
    return { response };
  } catch (errors) {
    return { errors };
  }
};
const ActivateAccount = async (data: ActivateAccount) => {
  const requestOptions: HttpRequestype = {
    url: ServiceConfig.activateAccount,
    data,
    method: "PUT",
    showActual: true,
    withCredentials: true,
  };

  try {
    const response = await HttpRequestPrivate(requestOptions);
    return { response };
  } catch (errors) {
    return { errors };
  }
};

const logout = async () => {
  const requestOptions: HttpRequestype = {
    url: ServiceConfig.logoutEndPoint,
    method: "GET",
    withCredentials: true,
  };
  try {
    const response = await HttpRequestPrivate(requestOptions);
    return { response };
  } catch (errors) {
    return { errors };
  }
};

export const loginService = {
  login,
  ActivateAccount,
  verifyOtp,
  logout,
};
