import Link from "next/link";
import React from "react";
import { HiOutlineLockClosed } from "react-icons/hi";
import { MdOutlinePublic } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { useRouter } from "next/router";
import { RoomType, roomCardDataProps } from "@/types/roomInfoTypes";

const RoomCard: React.FC<roomCardDataProps> = ({
  roomId,
  roomname,
  members,
  roomType,
}) => {
  const router = useRouter();
  let icon;
  switch (roomType) {
    case RoomType.SOCIAL:
      icon = <MdOutlinePublic />;
      break;
    case RoomType.PUBLIC:
      icon = <MdOutlinePublic />;
      break;
    case RoomType.PRIVATE:
      icon = <HiOutlineLockClosed />;
      break;
    default:
      break;
  }
  const { roomId: id } = router.query;

  const borderColor =
    roomType === RoomType.SOCIAL
      ? "border-t-teal-600 "
      : roomType === RoomType.PUBLIC
      ? "border-t-yellow-500 "
      : "border-t-purple-700 ";

  const isActiveBorder =
    router.route.includes(`/dashboard/room/`) && id === roomId
      ? `shadow-shadow-sidebar  border-t-2  ${borderColor}   bg-opacity-100    `
      : "border-t-2 border-t-transparent";

  return (
    <Link
      href={`/dashboard/room/${roomId}`}
      className={`flex transition-all ease-in-out duration-300 px-2 py-2 cursor-pointer hover:bg-opacity-80   w-full    rounded-md  items-center gap-3   bg-secondaryBgColor bg-opacity-30 backdrop-blur-xl relative ${isActiveBorder}`}
    >
      <span className="bg-secondaryBgColor text-pink  rounded-full flex items-center  justify-center">
        {icon}
      </span>

      <p
        className={`text-sm font-medium   text-ellipsis  whitespace-nowrap overflow-hidden  max-w-[65%]   text-secondaryTextColor  `}
      >
        {roomname}
      </p>

      <span className="flex items-center gap-1  absolute right-2 text-secondaryTextColor ">
        <FiUsers className="text-sm" />
        <span className="text-sm self-end">{members}</span>
      </span>
    </Link>
  );
};

export default RoomCard;
