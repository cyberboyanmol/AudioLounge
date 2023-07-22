import React from "react";
import { motion } from "framer-motion";
import { ButtonProps } from "./Button";

const Button: React.FC<ButtonProps> = ({
  btnText,
  onClick,
  icon,
  btnType,
  className,
  fullWidth,
}) => {
  let backgroundColor = ``;
  let innerBackgroundColor = ``;
  switch (btnType) {
    case "primary":
      backgroundColor = `bglinearGradient `;
      innerBackgroundColor = `bg-primaryBgColor`;
      break;
    case "secondary":
      backgroundColor = `bg-primaryBgColor text-primaryTextColor `;
      break;
    case "live":
      backgroundColor = `bg-red-500 text-primaryTextColor `;
      break;
    default:
      backgroundColor = ` bg-white text-black`;
      break;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.999 }}
      className={`${backgroundColor}   transition-all      duration-200 ease-in-out   p-0.5  rounded-3xl  ${
        fullWidth ? "w-full" : ""
      }  `}
    >
      <motion.button
        onClick={onClick}
        className={`${innerBackgroundColor} px-6 py-1.5 rounded-3xl w-full   text-base  flex gap-2  items-center font-semibold transition-all   duration-200 ease-in-out  cursor-pointer border-none  outline-none justify-center ${className} `}
      >
        {btnText && <span>{btnText}</span>}
        {icon}
      </motion.button>
    </motion.div>
  );
};

export default Button;
