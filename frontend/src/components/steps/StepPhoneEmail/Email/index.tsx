import React, { useState } from "react";
import { StepProps } from "..";
import { Button, Card, TextInput } from "@/components/shared";
import styles from "../stepPhoneEmail.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import verify, { setVerify } from "@/store/slices/verify";
import { SendOtpProps, verifyOtpProps } from "@/types";
import { sendOtp } from "@/axios/axiosPublic.client";
import userApi from "@/axios/modules/user.api";

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

    const { response, err } = await userApi.login<SendOtpProps>({ email });

    if (response) {
      const { data, message } = response.data;
      dispatch(
        setVerify({
          email: data.email,
          hash: data.hash,
        })
      );
      toast.success(message);
      onNext();
    }
    if (err) {
      toast.error(err.response.data.message[0].error);
    }
  };

  const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter" && event.keyCode === 13) {
      SignInWithEmailHandler();
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
        onKeyDown={onKeyDownHandler}
      />{" "}
      <p className={styles.bottomParagraph}>
        we will send you a One Time Password on your mail.
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
