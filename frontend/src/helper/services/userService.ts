import { abort } from "process";
import { HttpRequestype } from "../HttpRequest/types";
import ServiceConfig from "../serviceConfig";
import HttpRequestPrivate from "../HttpRequest/httpRequestPrivate";
import { Axios } from "axios";
import store from "@/store";
import { setLoading } from "@/store/slices/uiSlice";

const getCurrentUser = async (controller: AbortController) => {
  const requestOptions: HttpRequestype = {
    url: ServiceConfig.getCurrentUser,
    method: "GET",
    signal: controller.signal,
    showActual: true,
    withCredentials: true,
  };

  try {
    store.dispatch(setLoading({ loading: true }));
    const response = await HttpRequestPrivate(requestOptions);
    store.dispatch(setLoading({ loading: false }));
    return { response };
  } catch (errors) {
    store.dispatch(setLoading({ loading: false }));
    return { errors };
  }
};

export const UserService = {
  getCurrentUser,
};
