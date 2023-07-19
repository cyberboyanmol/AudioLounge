import DashboardLayout from "@/components/layouts/dashboardLayout";
import { useRouter } from "next/router";
import React from "react";

const Event = () => {
  const router = useRouter();

  const pathname = router.pathname;
  return <DashboardLayout>{`event${pathname} `}</DashboardLayout>;
};

export default Event;
