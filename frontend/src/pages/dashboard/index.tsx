import ProtectedRoute from "@/components/RouteProtector/Protected";
import { RootState } from "@/store";
import { authSliceInitialProps } from "@/types";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard: NextPage = () => {
  const user = useSelector<RootState, authSliceInitialProps["user"]>(
    (state) => state.auth.user
  );

  return (
    <>
      <h1>Dashboard</h1>
      <p>{`${user.userId}`}</p>
    </>
  );
};

export default ProtectedRoute(Dashboard);
