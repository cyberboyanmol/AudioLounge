import DashboardLayout from "@/components/Layouts/Dashboard";
import { useRouter } from "next/router";
import React, { useState } from "react";
import BannerSection from "@/components/RoomPage/BannerSection";
import TabSection from "@/components/RoomPage/TabSection";
const Room = () => {
  const router = useRouter();
  const [tab, setTabs] = useState("Account");
  const [activeTab, setActiveTab] = useState("Announcements");
  const { roomId } = router.query;

  return (
    <DashboardLayout>
      <BannerSection />
      <TabSection />
    </DashboardLayout>
  );
};

export default Room;
