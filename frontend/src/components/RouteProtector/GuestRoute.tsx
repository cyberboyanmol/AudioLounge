import { RootState } from "@/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const GuestRoute = (WrappedComponent: React.ComponentType<any>) => {
  const Auth = (props: JSX.Element) => {
    const router = useRouter();

    const userId = useSelector((state: RootState) => state.auth.user.userId);
    const isActivated = useSelector<RootState>(
      (state) => state.auth.user.activated
    );

    useEffect(() => {
      if (userId && isActivated) {
        router.replace("/dashboard");
      } else if (userId && !isActivated) {
        router.push("/setup");
      } else if (router.pathname === "/dashboard") {
        router.push("/");
      }
    }, [isActivated, router, userId]);

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default GuestRoute;
