import React, { useState } from "react";
import { StepProps } from "..";
import { Button, Card, TextInput } from "@/components/shared";
import styles from "../stepPhoneEmail.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
const Email: React.FC<StepProps> = ({ onNext }) => {
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
    <Card title="Enter Your email id " icon="email-emoji">
      <TextInput
        icon={<HiOutlineMail className={styles.InputIcon} />}
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="robin@gmail.com"
      />{" "}
      <p className={styles.bottomParagraph}>
        By entering your Email, you’re agreeing to our Terms of Service and
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

export default Email;
