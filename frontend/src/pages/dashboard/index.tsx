import ProtectedRoute from "@/components/RouteProtector/Protected";
import { RootState } from "@/store";
import { authSliceInitialProps } from "@/types";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard: NextPage = () => {
  const user = useSelector<RootState>(
    (state) => state.auth.user
  ) as authSliceInitialProps;

  return (
    <>
      <h1>Dashboard</h1>
      <p>{`${user}`}</p>
    </>
  );
};

export default ProtectedRoute(Dashboard);
