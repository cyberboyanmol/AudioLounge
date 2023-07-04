import { Button, OtpInput } from "@/components/shared";
import Card from "@/components/shared/Card";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./StepOtp.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const StepOtp = () => {
  const [otp, setOtp] = useState<string>("");
  console.log(otp);
  const dispatch = useDispatch();
  const onChange = (value: string) => setOtp(value);
  const ButtonStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  const externalStyle = {
    background: "var(--linearGradient)",
    color: "var(--primaryTextColor)",
  };
  const otpsubmitHandler = () => {};
  return (
    <div className="cardWrapper">
      <Card title="Enter the code we just texted you" icon="lock-emoji">
        <OtpInput value={otp} onChange={onChange} valueLength={6} />
        <span className={styles.reSendOtp}>
          Didn’t receive? <span> Tap to resend</span>
        </span>
        <div className={styles.actionButtonWrap}>
          <Button
            externalStyle={externalStyle}
            onClick={otpsubmitHandler}
            text="Next"
            icon={<AiOutlineArrowRight style={ButtonStyle} />}
          />
        </div>
      </Card>
    </div>
  );
};

export default StepOtp;
