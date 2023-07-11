import { Button, OtpInput } from "@/components/shared";
import Card from "@/components/shared/Card";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./StepOtp.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { toast } from "react-toastify";
import { sendOtp } from "@/axios/axiosPublic.client";
import { SendOtpProps, verifyOtpProps, verifySliceInitialProps } from "@/types";
import { setUser } from "@/store/slices/auth";
import { setVerify } from "@/store/slices/verify";
import userApi from "@/axios/modules/user.api";
import { StepProps } from "../StepPhoneEmail";
import {
  buttonBorder,
  buttonExternalStyle,
  externalStylePrevious,
} from "@/utils";
import { setAccessToken } from "@/store/slices/accessToken";

const StepOtp: React.FC<StepProps> = ({ onPrevious }) => {
  const [otp, setOtp] = useState<string>("");
  const dispatch = useDispatch();
  const verify = useSelector<RootState>(
    (state) => state.verify
  ) as verifySliceInitialProps;

  const router = useRouter();

  const onChange = (value: string) => setOtp(value);
  const ButtonStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  const externalStyle = {
    background: "var(--linearGradient)",
    color: "var(--primaryTextColor)",
  };

  const resendOtp = async () => {
    const email = verify.email;
    if (!email) {
      toast.error("Email is Required");
      return;
    }

    try {
      const response = await sendOtp<SendOtpProps>({ email });

      const { data, message } = response.data;

      dispatch(
        setVerify({
          email: data.email,
          hash: data.hash,
        })
      );
      toast.success(message);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message[0].error);
    }
  };

  const otpsubmitHandler = async () => {
    if (!otp) return toast.error("Enter your valid otp ");

    const { response, err } = await userApi.verifyEmail<verifyOtpProps>({
      email: verify.email,
      hash: verify.hash,
      otp: Number(otp),
    });

    if (response) {
      const { data, message } = response.data;

      dispatch(
        setUser({
          user: data.user,
        })
      );
      dispatch(
        setAccessToken({
          accessToken: data.accessToken,
        })
      );

      dispatch(
        setVerify({
          email: "",
          hash: "",
        })
      );
      toast.success(message);
      router.push("/setup");
    }
    if (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="cardWrapper">
      <Card title="OTP Verification" icon="lock-emoji">
        <span className={styles.otpSendTo}>
          Enter the Otp sent to your <span>{"anmolgangwar64@gmail.com"} </span>
        </span>
        <OtpInput value={otp} onChange={onChange} valueLength={6} />
        <span className={styles.reSendOtp}>
          Dont receive the OTP? <span onClick={resendOtp}> RESEND OTP</span>
        </span>
        <div className={"actionButtonWrap"}>
          <Button
            buttonExternalStyle={externalStylePrevious}
            onClick={onPrevious}
            text="Previous"
            icon={<AiOutlineArrowLeft style={ButtonStyle} />}
          />
          <Button
            buttonExternalStyle={buttonExternalStyle}
            buttonBorder={buttonBorder}
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
