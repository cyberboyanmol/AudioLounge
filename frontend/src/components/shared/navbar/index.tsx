import React, { useState } from "react";
import { SidebarProps as NavbarbarProps } from "../sidebar";
import { SiBackendless } from "react-icons/si";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { authSliceInitialProps } from "@/types";

const Navbar: React.FC<NavbarbarProps> = ({
  open,
  setMobile,
  setOpen,
  mobile,
}) => {
  const user = useSelector<RootState, authSliceInitialProps["user"]>(
    (state) => state.auth.user
  );
  const [image, setImage] = useState<string>(
    user.avatar
      ? user.avatar
      : "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=740"
  );
  return (
    <div className="w-full  sticky top-0 z-10 flex items-center border-b border-secondaryBgColor bg-primaryBgColor  bg-opacity-90    backdrop-blur-sm justify-between  px-4 md:px-6 lg:px-9  py-[.8rem]  ">
      <div className="flex-2/4 flex relative  items-center self-center   gap-6    ">
        {!open && (
          <AiOutlineMenuUnfold
            className=" hidden cursor-pointer self-center  lg:flex text-secondaryTextColor text-xl"
            onClick={() => setOpen(!open)}
          />
        )}
        {!mobile && (
          <HiMenuAlt3
            size={28}
            className="self-center  lg:hidden cursor-pointer  
            duration-75 hover:scale-95"
            onClick={() => setMobile(true)}
          />
        )}
      </div>
      {/* Navbar right  */}
      <div className=" flex  relative items-center gap-2   ">
        <h3 className="text-lg text-primaryTextColor font-medium ">
          {"Anmol Gangwar"}
        </h3>
        <div className={` w-11 h-11  p-0.5 bglinearGradient rounded-full  `}>
          <Image
            src={image}
            alt="user_avatar"
            className={`w-full h-full    object-cover rounded-full `}
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
