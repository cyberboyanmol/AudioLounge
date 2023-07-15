import React from "react";
import Navigation from "../shared/navigation";

export type SetupLayoutProps = {
  children: React.ReactNode;
};

const SetupLayout: React.FC<SetupLayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default SetupLayout;
