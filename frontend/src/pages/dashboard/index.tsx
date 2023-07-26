import { DashboardLayout } from "@/components/";
import ProtectedRoute from "@/components/RouteProtector/Protected";
import React from "react";

const Dashboard = () => {
  return <DashboardLayout>asdasd</DashboardLayout>;
};

export default ProtectedRoute(Dashboard);
