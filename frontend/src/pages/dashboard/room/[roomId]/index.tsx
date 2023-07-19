import DashboardLayout from "@/components/layouts/dashboardLayout";
import { useRouter } from "next/router";
import React from "react";

const Room = () => {
  const router = useRouter();

  const { roomId } = router.query;
  return (
    <DashboardLayout>
      <div className="w-[92%] lg:w-[90%] mx-auto border ">



        
      </div>
    </DashboardLayout>
  );
};

export default Room;
