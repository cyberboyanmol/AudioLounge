import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Sidebar } from "../Shared";

const Dashboard: React.FC<LayoutTypes.LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [mobile, setMobile] = useState<boolean>(false);
  return (
    <div className="w-screen h-screen  overflow-y-scroll   flex relative bg-black-800 ">
      <div
        className={`hidden   overflow-x-hidden overflow-y-scroll lg:inline-block  ${
          open ? "  w-80   xll:w-96" : "w-0 opacity-0"
        }  h-[100%] duration-500`}
      >
        <Sidebar
          open={open}
          setMobile={setMobile}
          mobile={mobile}
          setOpen={setOpen}
        />
      </div>

      {/* Mobile Sidebar-start */}
      <motion.div
        initial={{ x: "-100%" }}
        transition={{ type: "just" }}
        animate={{ x: mobile ? "0%" : "-100%" }}
        className={`z-20  w-[80%] sm:w-[60%]  md:w-[40%]  overflow-y-scroll overflow-x-hidden  absolute h-[100%]    `}
      >
        <Sidebar
          open={open}
          setOpen={setOpen}
          mobile={mobile}
          setMobile={setMobile}
        />
      </motion.div>
      {mobile && (
        <div
          className="w-screen ease-in-out duration-500 h-screen z-10 absolute bg-opacity-70  bg-placeholderColor "
          onClick={() => setMobile(false)}
        ></div>
      )}

      <div className=" w-[100%] h-[100%] flex flex-col gap-4 lg:gap-6  overflow-y-scroll overflow-x-hidden   ">
        <Navbar
          open={open}
          setOpen={setOpen}
          mobile={mobile}
          setMobile={setMobile}
        />
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
