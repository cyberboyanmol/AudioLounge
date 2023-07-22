import { useState } from "react";
import { motion } from "framer-motion";
import { TabProps } from "./Tab";
import { RoomType } from "@/types/roomInfoTypes";

const Tab: React.FC<TabProps> = ({
  activeTab,
  setActiveTab,
  tabText,
  roomType,
}) => {
  const handleTabClick = (tabText: string) => {
    setActiveTab(tabText);
  };

  const TextColor =
    roomType === RoomType.SOCIAL
      ? "text-teal-600"
      : roomType === RoomType.PUBLIC
      ? "text-yellow-500"
      : "text-purple-700";

  return (
    <motion.button
      className={`px-4 py-2   whitespace-nowrap    hover:bg-yellow-300 hover:bg-opacity-5 ${
        activeTab === tabText
          ? `${TextColor} font-medium   border-b-2      `
          : "text-secondaryTextColor  font-normal"
      }`}
      onClick={() => handleTabClick(tabText)}
      style={{
        borderBottom: activeTab === tabText ? `2px solid   ` : "none",
        background: activeTab === tabText ? "" : "none",
      }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
    >
      {tabText}
    </motion.button>
  );
};

export default Tab;
