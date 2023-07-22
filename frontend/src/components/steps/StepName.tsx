import React, { useState } from "react";
import { motion } from "framer-motion";
import { authSliceInitialProps } from "@/types";
import { Button, Card, Input } from "../Shared";
import { useDispatch } from "react-redux";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { setUser } from "@/store/slices/auth";
import { toast } from "react-toastify";
import { AiOutlineArrowRight, AiOutlineUser } from "react-icons/ai";
import { StepProps } from "./Steps";
const StepName: React.FC<StepProps> = ({ onNext, onPrevious }) => {
  const [fullname, setFullname] = useState("");
  const dispatch = useDispatch();
  const user = useSelector<RootState, authSliceInitialProps["user"]>(
    (state) => state.auth.user
  );
  function NameHandler() {
    // if (!fullname) {
    //   toast.error("Name is required ");
    //   return;
    // }

    // dispatch(
    //   setUser({
    //     user: {
    //       ...user,
    //       name: fullname,
    //     },
    //   })
    // );
    onNext();
  }
  const ButtonStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter" && event.keyCode === 13) {
      NameHandler();
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={`cardWrapper `}
    >
      <Card title="What’s your full name?" icon="goggle-emoji">
        <Input
          icon={
            <AiOutlineUser
              className={`absolute z-10 top-3 text-3xl opacity-50 left-2 text-secondaryTextColor `}
            />
          }
          type="text"
          placeholder="ex: john wick"
          onChange={(e) => setFullname(e.target.value)}
          onKeyDown={onKeyDownHandler}
        />
        <p className={`text-secondaryTextColor text-center w-[90%] mx-auto `}>
          People use real names at AudioLounge :) !
        </p>
        <div className={`flex w-full items-center justify-center md:w-[70%]`}>
          <Button
            btnType="primary"
            onClick={NameHandler}
            btnText="Next"
            icon={<AiOutlineArrowRight className=" text-lg font-bold " />}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default StepName;
