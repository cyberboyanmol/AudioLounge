import React, { useMemo } from "react";
import styles from "./OtpInput.module.css";
export type OtpInputProps = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};
export const RE_DIGIT = new RegExp(/^\d+$/);

const OtpInput: React.FC<OtpInputProps> = ({
  value,
  valueLength,
  onChange,
}) => {
  const valueItems = useMemo(() => {
    const valueArray = value.split(""); //convert 1234 =>['1', '2', '3','4']
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];
      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }
    return items;
  }, [value, valueLength]);

  //   inputOnChange

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target as HTMLInputElement;
    let targetValue = target.value;

    if (!RE_DIGIT.test(targetValue)) {
      return;
    }

    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1);
    console.log(newValue);
    onChange(newValue);
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const inputOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target as HTMLInputElement;

    const targetValue = target.value;
    target.setSelectionRange(0, targetValue.length);
    if (e.key !== "Backspace" || target.value === "") {
      return;
    }
    const newValue = value.substring(0, idx);

    // console.log(newValue);
    onChange(newValue);
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    target.setSelectionRange(0, target.value.length);
  };
  return (
    <div className={styles.otpGroup}>
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={valueLength}
          className={styles.otpInput}
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={(e) => inputOnKeyDown(e, idx)}
          onFocus={inputOnFocus}
        />
      ))}
    </div>
  );
};

export default OtpInput;
