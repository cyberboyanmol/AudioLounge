import React, { useState } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import verify, { setVerify } from "@/store/slices/verify";
import { SendOtpProps, StepProps, verifyOtpProps } from "@/types";
import { sendOtp } from "@/axios/axiosPublic.client";
import userApi from "@/axios/modules/user.api";
import { Button, Card, TextInput } from "@/components/shared";
import { motion } from "framer-motion";

const Email: React.FC<StepProps> = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const SignInWithEmailHandler = async () => {
    if (!email) {
      toast.error("Email is Required");
      return;
    }
    // const { response, err } = await userApi.login<SendOtpProps>({ email });
    // if (response) {
    //   const { data, message } = response.data;
    //   dispatch(
    //     setVerify({
    //       email: data.email,
    //       hash: data.hash,
    //     })
    //   );
    //   toast.success(message);
    //   onNext();
    // }
    // if (err) {
    //   toast.error(err.response.data.message[0].error);
    // }
  };

  const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter" && event.keyCode === 13) {
      SignInWithEmailHandler();
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={`cardWrapper `}
    >
      <Card title="Enter Your email id " icon="email-emoji">
        <TextInput
          icon={
            <HiOutlineMail
              className={`absolute z-10 top-3 text-3xl opacity-50 left-2 text-secondaryTextColor `}
            />
          }
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="robin@gmail.com"
          onKeyDown={onKeyDownHandler}
        />{" "}
        <p className={`text-secondaryTextColor text-center`}>
          we will send you a One Time Password on your mail.
        </p>
        <div className={`flex w-full items-center justify-center md:w-[70%]`}>
          <Button
            btnType="primary"
            onClick={SignInWithEmailHandler}
            btnText="Next"
            icon={<AiOutlineArrowRight className=" text-lg font-bold " />}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default Email;
