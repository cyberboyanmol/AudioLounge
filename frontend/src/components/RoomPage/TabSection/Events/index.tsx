import React from "react";
import { Button, EventCard } from "../../../Shared";
import { eventData } from "@/utils/data";

const Events = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between px-4 py-4 rounded-lg bg-primaryBgColor  ">
        <div className="text-xl font-medium md:text-2xl">Events</div>
        <Button
          onClick={() => {}}
          className="py-1"
          btnType="primary"
          btnText="Create an event "
        />
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lgg:grid-cols-3   gap-x-6 gap-y-8  ">
        {eventData.map((event, index) => {
          return <EventCard {...event} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Events;
