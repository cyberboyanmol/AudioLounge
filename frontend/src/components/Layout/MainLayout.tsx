import userApi, { userEndpoint } from "@/axios/modules/user.api";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Navigation from "../shared/Navigation"; // Make sure to import the component correctly
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { setUser } from "@/store/slices/auth";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { authSliceInitialProps } from "@/types";

export type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const currentUser = async () => {
      try {
        const response = await axiosPrivate.get(userEndpoint.getInfo);

        const { data } = response.data;

        dispatch(
          setUser({
            user: data.user,
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    currentUser();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [axiosPrivate, dispatch]);

  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default MainLayout;
