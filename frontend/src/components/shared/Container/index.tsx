import React from "react";
import { ContainerProps } from "./Container";

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`w-[92%]  lg:w-[90%]  xll:w-[70%]   mx-auto  shadow-shadow-sidebar mb-[2rem] rounded-xl pb-6 bg-opacity-80  border-gray-100  backdrop-blur-md bg-secondaryBgColor ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
