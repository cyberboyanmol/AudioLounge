import { useDispatch } from "react-redux";
import axios from "../axios/axiosPublic.client";
import { resetUser, setUser } from "@/store/slices/auth";
import { authSliceInitialProps } from "@/types";
import { useSelector } from "react-redux";
import { RootState, persistor } from "@/store";
import { setLoading } from "@/store/slices/uiSlice";
import { setAccessToken } from "@/store/slices/accessToken";
import { useRouter } from "next/router";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const refresh = async () => {
    try {
      dispatch(setLoading({ loading: true }));
      const response = await axios.get("/auth/refresh-token", {
        withCredentials: true,
      });
      dispatch(
        setAccessToken({
          accessToken: response.data.data.accessToken,
        })
      );
      dispatch(setLoading({ loading: false }));
      return response.data.data.accessToken;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(resetUser());
        localStorage.clear();
        await persistor.purge();
        router.replace("/login");
      }
      return error;
    }
  };
  return refresh;
};

export default useRefreshToken;
