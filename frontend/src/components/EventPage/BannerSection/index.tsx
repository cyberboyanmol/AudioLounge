import React from "react";
import Image from "next/image";
import { BannerImage, Button, Container } from "../../Shared";
import {
  BsCameraVideo,
  BsFillMicFill,
  BsInfoSquareFill,
  BsMic,
} from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";
import { MdPeopleOutline } from "react-icons/md";
import { CiShare2, CiStreamOn } from "react-icons/ci";
const BannerSection = () => {
  const isEnded = false;
  const isStarted = false;
  //  eventBannersection
  return (
    <Container className="mb-[1rem]">
      <div className="relative w-full   rounded-tr-xl rounded-tl-xl    ">
        <BannerImage
          className="rounded-tr-xl rounded-tl-xl"
          src={`${"https://i.imgur.com/2chX21m.jpg"}`}
          alt="event_banner"
        />
      </div>

      <div className="px-5 md:px-10  pt-5 md:pt-9   flex flex-col gap-2 items-start  ">
        {/* event topic is of  max 75 character */}
        {isEnded && (
          <div className="text-red-500  text-sm flex  gap-2 font-medium items-center  break-words  max-w-prose ">
            <BsInfoSquareFill className="text-sm" />
            <span className="self-end font-medium">Event ended</span>
          </div>
        )}
        <h3 className="text-2xl lg:text-3xl font-bold w-full ">{`Marketing Seminar - Strategies for Effective Digital Marketing Strategies`}</h3>

        <div className="flex flex-col  gap-3 lg:gap-4  items-start">
          <span className="text-base font-medium text-gray-500 break-words gap-1  max-w-prose flex flex-col  items-start">{`Event By ${"Audio Lounge"}`}</span>

          {/* time of event */}
          <div className=" text-secondaryTextColor flex items-start lg:items-center gap-2 ">
            <RxCalendar className="text-3xl md:text-2xl " />
            <span className="text-sm self-end ">{`${"Thu, Jul 27, 2023, 8:30 PM - 9:30 PM"} (your local time)`}</span>
          </div>

          {/* event type */}
          <div className=" text-secondaryTextColor flex items-start lg:items-center gap-2 ">
            {/* audio icon if audio event else live  */}
            <BsMic className="text-2xl md:text-2xl " />
            {/* <BsCameraVideo className="text-2xl md:text-2xl " /> */}
            <span className="text-sm self-center ">{`${"Audio Event"} `}</span>
          </div>

          {/* attendees  */}
          <div className=" text-secondaryTextColor flex items-start lg:items-center gap-2 ">
            <MdPeopleOutline className="text-2xl md:text-2xl " />
            <span className="text-sm self-center ">{`${"7930"} Attendees`}</span>
          </div>
        </div>

        <div className="flex items-center mt-5 gap-3">
          {!isStarted && (
            <Button
              //   fullWidth
              btnType="primary"
              btnText="Register"
              className="py-1 text-secondaryTextColor "
              onClick={() => {}}
            />
          )}
          {/* when event is live on click the live button the register and push in the event  */}
          {isStarted && (
            <Button
              //   fullWidth
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
    </Container>
  );
};

export default BannerSection;
