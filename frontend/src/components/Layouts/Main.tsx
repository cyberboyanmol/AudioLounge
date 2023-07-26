import { UserService } from "@/helper/services/userService";
import { setUser } from "@/store/slices/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Main: React.FC<LayoutTypes.LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const currentUser = async () => {
      const { response, errors } = await UserService.getCurrentUser(controller);
      if (response) {
        const { data } = response.data;
        dispatch(
          setUser({
            user: data.user,
          })
        );
      }

      if (errors) {
        console.log(errors);
      }
    };
    currentUser();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [dispatch]);

  return <>{children}</>;
};

export default Main;
