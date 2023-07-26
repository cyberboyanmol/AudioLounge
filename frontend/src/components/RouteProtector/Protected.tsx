import { RootState } from "@/store";
import { authSliceInitialProps } from "@/types";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = (WrappedComponent: React.ComponentType<any>) => {
  const Auth = (props: JSX.Element) => {
    const router = useRouter();

    const userId = useSelector((state: RootState) => state.auth.user.userId);
    const isActivated = useSelector<RootState>(
      (state) => state.auth.user.activated
    );

    useEffect(() => {
      if (!userId) {
        router.replace("/login");
      } else if (userId && !isActivated) {
        router.push("/setup");
      }
    }, [isActivated, router, userId]);

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default ProtectedRoute;
