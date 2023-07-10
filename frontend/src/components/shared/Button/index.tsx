import React from "react";
import styles from "./Button.module.css";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
type ButtonProps = {
  text: string;
  onClick: () => void;

  icon?: React.ReactNode;
  externalStyle?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,

  externalStyle,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} `}
      style={externalStyle}
     
    >
      <span>{text}</span>
      {icon}
    </button>
  );
};
export default Button;
