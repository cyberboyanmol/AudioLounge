import DashboardLayout from "@/components/Layouts/Dashboard";
import ProtectedRoute from "@/components/RouteProtector/Protected";
import React from "react";

const Settings = () => {
  return <DashboardLayout>Settings</DashboardLayout>;
};

export default ProtectedRoute(Settings);
