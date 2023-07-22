import React, { ComponentType, useState } from "react";
import { Button, Container, Tab } from "../../Shared";
import { RoomTabData, RoomTabName } from "@/utils/data";
import { getIndexGenerator } from "@/utils/functions";
import { RoomType } from "@/types/roomInfoTypes";
import Events from "./Events";
import Announcements from "./Announcements";
import BrowseChannels from "./BrowseChannels";
import Hangouts from "./Hangouts";

const TabComponent = {
  [RoomTabName.ANNOUNCEMENTS]: Announcements,
  [RoomTabName.BROWSE]: BrowseChannels,
  [RoomTabName.EVENTS]: Events,
  [RoomTabName.HANGOUTS]: Hangouts,
};

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(RoomTabName.EVENTS); //later on user prefrences
  const roomType = RoomType.PUBLIC;
  const CurrentTab = TabComponent[activeTab];

  return (
    <Container className="py-4 px-4 bg-primaryBgColor ">
      <div className="w-[95%]  mx-auto flex flex-col gap-8">
        <div className="flex   overflow-x-scroll ">
          {RoomTabData.map((tab, index) => {
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
