import React, { InputHTMLAttributes } from "react";
import styles from "./TextInput.module.css";
import { HiOutlineMail } from "react-icons/hi";
export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
  icon: React.ReactNode;
};

const TextInput: React.FC<TextInputProps> = ({
  fullWidth = false,
  icon,
  ...inputProps
}) => {
  return (
    <div className={styles.customInput}>
      {icon ?? icon}
      <input
        className={styles.input}
        style={{
          width: fullWidth ? "100%" : "inherit",
        }}
        {...inputProps}
      />
    </div>
  );
};

export default TextInput;
