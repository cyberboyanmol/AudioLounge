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
import { verifyOtp } from "@/axios/axiosPublic.client";
import { verifyOtpProps, verifySliceInitialProps } from "@/types";
import { setUser } from "@/store/slices/auth";
import { setVerify } from "@/store/slices/verify";

const StepOtp = () => {
  const [otp, setOtp] = useState<string>("");
  const dispatch = useDispatch();
  const verify = useSelector<RootState>(
    (state) => state.verify
  ) as verifySliceInitialProps;
  console.log(otp);
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
  const otpsubmitHandler = async () => {
    if (!otp) return toast.error("Enter your valid otp ");
    try {
      const response = await verifyOtp({
        email: verify.email,
        hash: verify.hash,
        otp: Number(otp),
      });
      const { data, message } = response.data;
      console.log(response);
      dispatch(
        setUser({
          user: data.user,
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
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message[0].error);
    }
  };
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
