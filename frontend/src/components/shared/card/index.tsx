import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
type CardProps = {
  title?: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, icon, children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className={` max-w-[90%]  w-[500px] flex  items-center  justify-center flex-col gap-6 bg-secondaryBgColor rounded-2xl p-4
        md:py-8
       md:px-11   min-h-[300px] shadow-lg    ${className}`}
    >
      <div className={` flex items-center gap-4`}>
        {icon && (
          <Image
            className="w-6 h-6  "
            src={`/images/${icon}.png`}
            width={40}
            height={40}
            alt="image_logo"
          />
        )}
        {title && <h1 className={` text-lg font-semibold`}>{title}</h1>}
      </div>
      {children}
    </motion.div>
  );
};

export default Card;
