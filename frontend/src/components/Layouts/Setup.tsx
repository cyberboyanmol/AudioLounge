import React from "react";
import { Navigation } from "../Shared";

const Setup: React.FC<LayoutTypes.LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Setup;
