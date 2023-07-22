import React from "react";
import Image from "next/image";
import { BannerImage, Container } from "../../Shared";
import { RoomType } from "@/types/roomInfoTypes";

const BannerSection = () => {
  const roomType = RoomType.PUBLIC as string;
  const BgColor =
    roomType === RoomType.SOCIAL
      ? "bg-teal-600"
      : roomType === RoomType.PUBLIC
      ? "bg-yellow-500"
      : "bg-purple-700";

  return (
    <Container className="mb-[1rem]">
      <div className="relative w-full   rounded-tr-xl rounded-tl-xl    ">
        <BannerImage
          className="rounded-tr-xl rounded-tl-xl"
          src={"https://i.imgur.com/93SHTcG.jpg"}
          alt="event_banner"
        />
        <div
          className={`absolute   md:w-28 p-0.5 rounded-xl  w-16 h-16  -bottom-8 left-5   md:h-28     md:-bottom-12 md:left-10 ${BgColor} `}
        >
          <Image
            width={100}
            height={100}
            className=" w-full h-full rounded-xl"
            src={"https://i.imgur.com/CsPcljY.jpg"}
            alt="logo"
          />
        </div>
      </div>

      <div className="px-5 md:px-10 mt-12 md:mt-16 flex flex-col items-start  ">
        {/* room name max 25 character */}
        <h3 className="text-2xl font-bold">{`Compiler Corner`}</h3>
        <p className="text-base  text-secondaryTextColor  mt-2">
          Compiler Corner is a vibrant community for developers and coding
          enthusiasts. This dynamic space fosters collaboration and knowledge
          sharing among programmers of all levels. From discussions on
          programming languages and frameworks to best practices and design
          patterns, Compiler Corner offers a supportive environment to enhance
          coding skills. Regular events, workshops, and coding challenges
          encourage growth and exploration.
        </p>
      </div>
    </Container>
  );
};

export default BannerSection;
