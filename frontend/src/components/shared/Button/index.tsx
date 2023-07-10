import React from "react";
import styles from "./Button.module.css";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
type ButtonProps = {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  buttonBorder?: React.CSSProperties;
  buttonExternalStyle?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  buttonBorder,
  buttonExternalStyle,
}) => {
  return (
    <div className={styles.border_Bg} style={buttonBorder}>
      <button
        onClick={onClick}
        className={`${styles.button} `}
        style={buttonExternalStyle}
      >
        <span>{text}</span>
        {icon}
      </button>
    </div>
  );
};
export default Button;
