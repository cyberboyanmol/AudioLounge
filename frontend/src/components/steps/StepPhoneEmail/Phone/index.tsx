import React, { useState } from "react";
import { StepPhoneEmailProps } from "..";
import { Button, Card, TextInput } from "@/components/shared";
import styles from "../stepPhoneEmail.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Phone: React.FC<StepPhoneEmailProps> = ({ onNext }) => {
  const [email, setEmail] = useState("");
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
  return (
    <Card title="Enter Your phone number " icon="phone">
      <TextInput
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="robin@gmail.com"
      />{" "}
      <p className={styles.bottomParagraph}>
        By entering your number, you’re agreeing to our Terms of Service and
        Privacy Policy. Thanks!
      </p>
      <div className={styles.actionButtonWrap}>
        <Button
          externalStyle={externalStyle}
          onClick={onNext}
          text="Next"
          icon={<AiOutlineArrowRight style={ButtonStyle} />}
        />
      </div>
    </Card>
  );
};

export default Phone;
