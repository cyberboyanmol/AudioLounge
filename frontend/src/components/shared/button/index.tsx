import React from "react";
type ButtonProps = {
  btnText: string;
  onClick: () => void;
  icon?: React.ReactNode;
  btnType?: "primary" | "secondary";
  className?: string;
  fullWidth?: boolean;
};

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
      backgroundColor = ``;
      break;

    default:
      backgroundColor = ` bg-white text-black`;
      break;
  }

  return (
    <div
      className={`${backgroundColor}  hover:scale-105 transition-all      duration-200 ease-in-out   p-0.5  rounded-3xl  ${
        fullWidth ? "w-full" : ""
      }  `}
    >
      <button
        onClick={onClick}
        className={`${innerBackgroundColor} px-6 py-2 rounded-3xl w-full   text-base  flex gap-2  items-center font-semibold transition-all   duration-200 ease-in-out  cursor-pointer border-none  outline-none justify-center ${className} `}
      >
        <span>{btnText}</span>
        {icon}
      </button>
    </div>
  );
};

export default Button;
