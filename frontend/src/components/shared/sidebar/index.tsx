import Image from "next/image";
import React, { SetStateAction } from "react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdOutlineDashboard,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import MenuCard from "./MenuCard";
import RoomCard from "./Roomcard";
import type { MenuCardType } from "./MenuCard/MenuCard";
import { roomData } from "@/utils/data";

export type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  mobile: boolean;
  setMobile: React.Dispatch<SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({
  open,
  setMobile,
  setOpen,
  mobile,
}) => {
  return (
    <div
      className={` min-h-screen   w-full    overflow-x-hidden  lg:overflow-auto bg-primaryBgColor border-r border-secondaryBgColor      backdrop-blur-md     `}
    >
      {/* sidebar top */}
      <div className="w-full flex  justify-between items-center  px-5 py-7">
        <div className="flex  items-center cursor-pointer gap-2">
          <GiMicrophone className={`text-pinkColor1 font-bold w-6  h-6 `} />
          <span className={` textLinearGradient   text-xl  font-bold  `}>
            AudioLounge
          </span>
        </div>

        <AiOutlineMenuFold
          className=" hidden cursor-pointer lg:flex text-secondaryTextColor text-xl"
          onClick={() => setOpen(!open)}
        />
        <AiOutlineClose
          size={28}
          className="   lg:hidden cursor-pointer  
            duration-75 hover:scale-95"
          onClick={() => setMobile(false)}
        />
      </div>

      <div className="mx-3 py-2 pb-6 border-b-2 border-secondaryBgColor  ">
        <ul className="flex flex-col gap-2">
          {menus.map((item, index) => {
            return <MenuCard data={item} key={`${index}- ${item.name}`} />;
          })}
        </ul>
      </div>
      <div className="mx-4 py-4  ">
        <div className=" flex items-center justify-between  gap-2  ">
          <h3 className="text-placeholderColor text-base font-semibold">
            {`# ROOMS`}
          </h3>
          <MdOutlineDashboardCustomize className="w-6 h-6 cursor-pointer text-gray-500 hover:scale-110 " />
        </div>
        <div className="mt-4">
          <ul className="flex overflow-y-scroll  max-h-[43vh] flex-col gap-2">
            {roomData.map((item, index) => {
              return <RoomCard {...item} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

export const menus: MenuCardType[] = [
  {
    name: "Home",
    link: "/dashboard",
    icon: <IoHomeOutline className="text-xl" />,
  },
  {
    name: "Explore",
    link: "/dashboard/explore",
    icon: <MdOutlineDashboard className="text-xl" />,
  },
  {
    name: "Notification",
    link: "/dashboard/notifications",
    icon: <IoNotificationsOffOutline className="text-xl" />,
  },
  {
    name: "Settings",
    link: "/dashboard/settings",
    icon: <CiSettings className="text-xl" />,
  },
];
