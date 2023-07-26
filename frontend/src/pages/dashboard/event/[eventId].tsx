import DashboardLayout from "@/components/Layouts/Dashboard";

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { EventCardProps, EventCategory } from "@/types/eventInfoTypes";
import { BannerImage, Container } from "@/components";
import { eventData } from "@/utils/data";
import BannerSection from "@/components/EventPage/BannerSection";
import useRouterReady from "@/hooks/useRouterReady";
import TabSection from "@/components/EventPage/TabSection";
import ProtectedRoute from "@/components/RouteProtector/Protected";
const Event = () => {
  const { loading, router } = useRouterReady();
  const [currentEvent, setCurrentEvent] = useState<EventCardProps>();
  useEffect(() => {
    if (!loading) {
      const { eventId } = router.query;
      console.log(router.query);
      const currentEvent = eventData.find((event) => event.eventId === eventId);

      console.log(currentEvent);
      setCurrentEvent(currentEvent);
    }
  }, [loading, router]);

  return (
    <DashboardLayout>
      <BannerSection />
      <TabSection />
    </DashboardLayout>
  );
};

export default ProtectedRoute(Event);
