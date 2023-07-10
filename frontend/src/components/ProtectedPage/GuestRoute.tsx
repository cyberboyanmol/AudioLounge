import { RootState } from "@/store";

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const GuestRoute = (WrappedComponent) => {
  const isAuthenticated = useSelector<RootState>((state) => state.auth.user);
  const Wrapper = (props) => {
    const router = useRouter();

    // Render the wrapped component if authenticated, otherwise render null
    return isAuthenticated ? (
      router.push("/dashboard")
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return Wrapper;
};

export default GuestRoute;
