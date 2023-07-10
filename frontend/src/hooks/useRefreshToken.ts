import { useDispatch } from "react-redux";
import axios from "../axios/axiosPublic.client";
import { setAccessToken, setUser } from "@/store/slices/auth";
import { authSliceInitialProps } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const auth = useSelector<RootState>((state) => state.auth);

  const refresh = async () => {
    const response = await axios.get("/auth/refresh-token", {
      withCredentials: true,
    });

    dispatch(
      setAccessToken({
        accessToken: response.data.data.accessToken,
      })
    );
    return response.data.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
