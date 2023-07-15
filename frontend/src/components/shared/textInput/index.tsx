import React, { InputHTMLAttributes } from "react";
export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
  type: string;
  icon: React.ReactNode;
};

const TextInput: React.FC<TextInputProps> = ({
  fullWidth = false,
  type = "text",
  icon,
  ...inputProps
}) => {
  return (
    <div className={`w-full  relative`}>
      {icon ?? icon}
      <input
        className={` relative  bg-primaryBgColor border-none py-3  text-primaryTextColor pr-8 pl-12 w-full text-lg outline-none  placeholder:text-placeholderColor  rounded-lg `}
        type={type}
        {...inputProps}
      />
    </div>
  );
};

export default TextInput;
