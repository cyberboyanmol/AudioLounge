import { useDispatch } from "react-redux";
import axios from "../axios/axiosPublic.client";
import { setUser } from "@/store/slices/auth";
import { authSliceInitialProps } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const user = useSelector<RootState, authSliceInitialProps["user"]>(
    (state) => state.auth.user
  );
  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });

    dispatch(
      setUser({
        user,
        accessToken: response.data.accessToken,
      })
    );

    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
