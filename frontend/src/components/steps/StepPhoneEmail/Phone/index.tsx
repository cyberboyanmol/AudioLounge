import React, { useState } from "react";
import { StepProps } from "..";
import { Button, Card, TextInput } from "@/components/shared";
import styles from "../stepPhoneEmail.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";
import { HiOutlineMail } from "react-icons/hi";

const Phone: React.FC<StepProps> = ({ onNext }) => {
  const [phone, setPhone] = useState("");

  const ButtonStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  const externalStyle = {
    background: "var(--linearGradient)",
    color: "var(--primaryTextColor)",
    // paddingRight: "2.5rem",
    // paddingLeft: "2.5rem",
  };

  const isValidPhoneNumber = (number: string) => {
    const regex = /^91\d{10}$/;
    return regex.test(number);
  };
  const PhoneRegisterHandler = () => {
    if (!phone) {
      return;
    }
    if (isValidPhoneNumber(phone)) {
      onNext();
      console.log("Phone number is valid:", phone);
    } else {
      console.log("Invalid phone number:", phone);
    }
  };

  return (
    <Card title="Enter Your phone number " icon="phone">
      <TextInput
        icon={<HiOutlineMail className={styles.InputIcon} />}
        value={phone}
        type="tel"
        pattern="[0-9]{12}"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+9174559XXXXX"
      />{" "}
      <p className={styles.bottomParagraph}>
        By entering your number, you’re agreeing to our Terms of Service and
        Privacy Policy. Thanks!
      </p>
      <div className={styles.actionButtonWrap}>
        <Button
          externalStyle={externalStyle}
          onClick={PhoneRegisterHandler}
          text="Next"
          icon={<AiOutlineArrowRight style={ButtonStyle} />}
        />
      </div>
    </Card>
  );
};

export default Phone;
