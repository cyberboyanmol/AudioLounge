import { RootState } from "@/store";
import { verifySliceInitialProps } from "@/types";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StepProps } from "./Steps";
import { Button, Card, OtpInput } from "../Shared";
import { setUser } from "@/store/slices/auth";
import { setAccessToken } from "@/store/slices/accessToken";
import { setVerify } from "@/store/slices/verify";
import { toast } from "react-toastify";
import { loginService } from "@/helper/services/loginService";
import { AxiosError } from "axios";

const StepOtp: React.FC<StepProps> = ({ onNext, onPrevious }) => {
  const [otp, setOtp] = useState<string>("");
  const dispatch = useDispatch();
  const verify = useSelector<RootState>(
    (state) => state.verify
  ) as verifySliceInitialProps;

  const router = useRouter();

  const onChange = (value: string) => setOtp(value);

  const resendOtp = async () => {
    const email = verify.email;
    if (!email) {
      toast.error("Email is Required");
      return;
    }

    const { response, errors } = await loginService.login({ email });

    if (response) {
      const { data, message } = response.data;
      dispatch(
        setVerify({
          email: data.email,
          hash: data.hash,
        })
      );
      toast.success(message);
    }

    if (errors) {
      const err = errors as AxiosError<any>;
      toast.error(err.response?.data.message[0].error);
    }
  };

  // otp handler
  const otpsubmitHandler = async () => {
    if (!otp) return toast.error("Enter your valid otp ");

    const { response, errors } = await loginService.verifyOtp({
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
      if (data.user.activated) {
        router.push("/dashboard");
      }
    }
    if (errors) {
      const err = errors as AxiosError<any>;
      toast.error(err.response?.data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={`cardWrapper `}
    >
      <Card title="OTP Verification" icon="lock-emoji">
        <span className={`text-secondaryTextColor  text-sm text-center`}>
          Enter the Otp sent to your{" "}
          <span className=" text-primaryTextColor font-semibold  text-base ">
            {verify.email}
          </span>
        </span>
        <OtpInput value={otp} onChange={onChange} valueLength={6} />
        <span className={`text-secondaryTextColor  text-sm text-center`}>
          Dont receive the OTP?{" "}
          <span
            className="text-pinkColor cursor-pointer font-semibold  text-base"
            onClick={resendOtp}
          >
            {" "}
            RESEND OTP
          </span>
        </span>
        <div className={`flex w-full items-center justify-between`}>
          <Button
            className="flex-row-reverse"
            btnType="secondary"
            onClick={onPrevious}
            btnText="Previous"
            icon={<AiOutlineArrowLeft className=" text-lg font-bold " />}
          />
          <Button
            btnType="primary"
            onClick={otpsubmitHandler}
            btnText="Next"
            icon={<AiOutlineArrowRight className=" text-lg font-bold " />}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default StepOtp;
