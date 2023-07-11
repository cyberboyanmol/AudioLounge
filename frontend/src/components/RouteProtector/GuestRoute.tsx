import { RootState } from "@/store";
import { authSliceInitialProps } from "@/types";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

<<<<<<< HEAD
const GuestRoute = (WrappedComponent: JSX.Element) => {
  const Auth = (props: JSX.Element) => {
=======
const GuestRoute = (WrappedComponent) => {
  const Auth = (props) => {
>>>>>>> c246de5b8846262b3e902dda03000d637286fcdc
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
      }
    }, [isActivated, router, userId]);

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default GuestRoute;
