import React from "react";
interface TabProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  tabText: string;
  roomType: string;
  [key: string]: unknown;
}

export { TabProps };
