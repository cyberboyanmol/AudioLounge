import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MenuCardData } from "../index";
import { useRouter } from "next/router";
import Button from "../../button";

export type MenuCardProps = {
  data: MenuCardData;
};

const MenuCard: React.FC<MenuCardProps> = ({ data }) => {
  const { name, link, icon } = data;

  const router = useRouter();

  const isActiveBorder =
    router.pathname === data.link
      ? `shadow-shadow-sidebar  border-t-2 border-t-cyan-400    bg-opacity-100    `
      : "border-t-2 border-t-transparent";

  return (
    <Link
      href={`${link}`}
      className={`flex transition-all ease-in-out duration-300 px-2 py-1.5 cursor-pointer hover:bg-opacity-80      rounded-md  items-center gap-3   bg-secondaryBgColor bg-opacity-30 backdrop-blur-xl    ${isActiveBorder}  relative`}
    >
      <span className="bg-secondaryBgColor text-pink w-8 h-8 rounded-full flex items-center  justify-center">
        {icon}
      </span>

      <p className={`text-md font-medium     text-secondaryTextColor  `}>
        {name}
      </p>
    </Link>
  );
};

export default MenuCard;
