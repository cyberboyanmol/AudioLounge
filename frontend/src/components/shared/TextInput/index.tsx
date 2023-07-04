import React, { InputHTMLAttributes } from "react";
import styles from "./TextInput.module.css";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
};

const TextInput: React.FC<TextInputProps> = ({
  fullWidth = false,
  ...inputProps
}) => {
  return (
    <div>
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
