import React from "react";

export type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default MainLayout;
