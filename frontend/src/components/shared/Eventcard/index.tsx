import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";

import { BsInfoSquareFill } from "react-icons/bs";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { CiShare2, CiStreamOn } from "react-icons/ci";
import Link from "next/link";
import { EventCardProps } from "@/types/eventInfoTypes";
import { RoomType } from "@/types/roomInfoTypes";

const EventCard: React.FC<EventCardProps> = ({
  eventCategory,
  title,
  start_timing,
  roomname,
  attendeesCount,
  isEnded,
  isStarted,
  eventId,
  eventbanner,
}) => {
  const roomType = RoomType.PUBLIC as string;

  return (
    <div
      className={`w-full relative   shadow-sm shadow-gray-950   hover:shadow-shadow-sidebar  rounded-lg `}
    >
      <motion.div className="relative cursor-pointer pt-[56.25%]    ">
        <motion.img
          className="eventCardImage rounded-tl-lg rounded-tr-lg "
          src={`${eventbanner}`}
          alt="eventCardImage"
        />
        <Link
          href={`/dashboard/event/${eventId}`}
          className="absolute  eventCardImage  w-full z-10 h-full "
        />
      </motion.div>
      <div className="flex flex-col justify-between md:h-72 lgg:h-96    xl:h-72 py-3 pb-4  px-3  ">
        {/* top of card */}
        <div className="flex flex-col gap-1  ">
          {isEnded && (
            <div className="text-red-500  text-xs flex  gap-1 font-medium items-center  break-words  max-w-prose ">
              <BsInfoSquareFill className="text-xs" />
              <span className="self-end">Event ended</span>
            </div>
          )}
          <div className=" text-sm md:text-md text-secondaryTextColor break-words  max-w-prose">
            <span className=" after:content-['\2022']  after:px-2 ">
              {start_timing}
            </span>
            <span className="">{`Live ${eventCategory}`}</span>
          </div>
          <Link
            href={`/dashboard/event/${eventId}`}
            className="text-primaryTextColor hover:text-blue-500 hover:underline cursor-pointer text-md md:text-lg  break-words  max-w-prose "
          >
            {`${title}`}
          </Link>
        </div>

        {/* bottom of card */}
        <div className="flex    flex-col gap-2 mt-6">
          <div>
            <div className=" text-sm    md:text-md text-gray-500 break-words gap-1  max-w-prose flex flex-col  items-start">
              <span className="">{`By ${roomname}`}</span>
              <span className="">{`${attendeesCount}`} attendees</span>
            </div>
          </div>
          <div className="flex  w-full gap-2  items-center ">
            {!isStarted && (
              <Button
                fullWidth
                btnType="secondary"
                btnText="View"
                className="py-1 text-secondaryTextColor "
                onClick={() => {}}
              />
            )}
            {/* when event is live on click the live button the register and push in the event  */}
            {isStarted && (
              <Button
                fullWidth
                btnType="live"
                btnText="Live"
                className="py-1  flex-row-reverse "
                icon={<CiStreamOn className="text-xl " />}
                onClick={() => {}}
              />
            )}
            <Button
              btnType="secondary"
              className="py-1 px-2   text-secondaryTextColor "
              onClick={() => {}}
              icon={
                <CiShare2 className="text-2xl cursor-pointer text-primaryTextColor" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
