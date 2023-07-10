import { RootState } from "@/store";
import { NextPage } from "next";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard: NextPage = () => {
  const user = useSelector<RootState>((state) => state.auth.user);

  return (
    <div>
      <h1>Dashboard</h1>
      <>{user}</>
    </div>
  );
};

export default Dashboard;
