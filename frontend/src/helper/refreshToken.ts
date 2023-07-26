import axios from "axios";
import store, { persistor } from "@/store";
import { setAccessToken } from "@/store/slices/accessToken";
import { setLoading } from "@/store/slices/uiSlice";
import { resetUser } from "@/store/slices/auth";
import Router from "next/router";
import HttpRequest from "./HttpRequest";
import ServiceConfig from "./serviceConfig";
import { HttpRequestype } from "./HttpRequest/types";

const RefreshToken = async () => {
  try {
    const requestOptions: HttpRequestype = {
      url: ServiceConfig.refreshTokenEndPoint,
      method: "GET",
      withCredentials: true,
    };
    const response = await HttpRequest(requestOptions);
    store.dispatch(
      setAccessToken({
        accessToken: response.data.data.accessToken,
      })
    );
    store.dispatch(
      setAccessToken({
        accessToken: response.data.data.accessToken,
      })
    );
    store.dispatch(setLoading({ loading: false }));

    return response.data.data.accessToken;
  } catch (error: any) {
    if (error.response.status === 401 || error.response.status === 403) {
      store.dispatch(resetUser());

      localStorage.clear();
      await persistor.purge();

      Router.replace("/login");
    }
    return error;
  }
};

export default RefreshToken;
