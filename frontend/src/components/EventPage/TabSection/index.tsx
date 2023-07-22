import { Container, Tab } from "@/components/Shared";
import { EventTabData, EventTabName } from "@/utils/data";
import React, { useState } from "react";
import Description from "./Description";
import Updates from "./Updates";
import Attendees from "./Attendees";
import { EventType } from "@/types/eventInfoTypes";
import { getIndexGenerator } from "@/utils/functions";
const TabComponent = {
  [EventTabName.DESCRIPTION]: Description,
  [EventTabName.UPDATES]: Updates,
  [EventTabName.ATTENDEES]: Attendees,
};

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(EventTabName.DESCRIPTION); //later on user prefrences
  const roomType = EventType.PUBLIC;
  const CurrentTab = TabComponent[activeTab];

  return (
    <Container className="py-4 px-4 bg-primaryBgColor ">
      <div className="w-[95%]  mx-auto flex flex-col gap-8">
        <div className="flex   overflow-x-scroll ">
          {EventTabData.map((tab, index) => {
            return (
              <Tab
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                {...tab}
                roomType={roomType}
                key={getIndexGenerator(tab, index)}
              />
            );
          })}
        </div>
        <CurrentTab />
      </div>
    </Container>
  );
};

export default TabSection;
