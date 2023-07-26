import DashboardLayout from "@/components/Layouts/Dashboard";
import ProtectedRoute from "@/components/RouteProtector/Protected";
import React from "react";

const Explore = () => {
  return <DashboardLayout>Explore</DashboardLayout>;
};

export default ProtectedRoute(Explore);
