import DashboardLayout from "@/components/Layouts/Dashboard";
import ProtectedRoute from "@/components/RouteProtector/Protected";
import React from "react";

const Notification = () => {
  return <DashboardLayout>Notification</DashboardLayout>;
};

export default ProtectedRoute(Notification);
