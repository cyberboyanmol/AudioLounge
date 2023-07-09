import React, { useState } from "react";
import { StepProps } from "..";
import { Button, Card, TextInput } from "@/components/shared";
import styles from "../stepPhoneEmail.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";
import publicClient, { sendOtp } from "@/axios/axiosPublic.client";
import { useDispatch } from "react-redux";
import verify, { setVerify } from "@/store/slices/verify";
import { verifyOtpProps } from "@/types";
const Email: React.FC<StepProps> = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
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

  const SignInWithEmailHandler = async () => {
    if (!email) {
      toast.error("Email is Required");
      return;
    }

    try {
      const response = await sendOtp({ email });
      console.log(response);
      const { data, message } = response.data;

      dispatch(
        setVerify({
          email: data.email,
          hash: data.hash,
        })
      );
      toast.success(message);

      onNext();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message[0].error);
    }
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
          onClick={SignInWithEmailHandler}
          text="Next"
          icon={<AiOutlineArrowRight style={ButtonStyle} />}
        />
      </div>
    </Card>
  );
};

export default Email;
