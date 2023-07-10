import useAxiosPrivate, { axiosPrivate } from "@/hooks/useAxiosPrivate";
import publicClient from "../axiosPublic.client";

export const userEndpoint = {
  signin: "/auth/login",
  verifyEmail: "/auth/verify",
  getInfo: "/user/me",
  updateUser: "/user/activate",
};

const userApi = {
  login: async <T extends object>(data: T) => {
    try {
      console.log("login");
      const response = await publicClient.post(userEndpoint.signin, data);
      return { response };
    } catch (err) {
      console.log("error");
      return { err };
    }
  },
  verifyEmail: async <T extends object>(data: T) => {
    try {
      console.log("login");
      const response = await publicClient.post(userEndpoint.verifyEmail, data);
      return { response };
    } catch (err) {
      console.log("error", err);
      return { err };
    }
  },
};

export default userApi;
