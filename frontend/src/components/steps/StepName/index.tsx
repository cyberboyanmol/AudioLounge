import React, { useState } from "react";

import styles from "./StepName.module.css";
import { StepProps } from "../StepPhoneEmail";
import { Button, Card, TextInput } from "@/components/shared";
import { AiOutlineArrowRight, AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/auth";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { authSliceInitialProps } from "@/types";
import { toast } from "react-toastify";
import { buttonBorder, buttonExternalStyle } from "@/utils";

const StepName: React.FC<StepProps> = ({ onNext }) => {
  const [fullname, setFullname] = useState("");

  const dispatch = useDispatch();
  const user = useSelector<RootState>((state) => state.auth.user) as Omit<
    authSliceInitialProps,
    "accessToken"
  >;
  function NameHandler() {
    if (!fullname) {
      toast.error("Name is required ");
      return;
    }

    dispatch(
      setUser({
        user: {
          ...user,
          name: fullname,
        },
      })
    );
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
    <>
      <Card title="What’s your full name?" icon="goggle-emoji">
        <TextInput
          icon={<AiOutlineUser className={styles.InputIcon} />}
          value={fullname}
          type="text"
          placeholder="ex: John wick"
          onChange={(e) => setFullname(e.target.value)}
          onKeyDown={onKeyDownHandler}
        />
        <p className={styles.paragraph}>
          People use real names at AudioLounge :) !
        </p>
        <div>
          <Button
            buttonBorder={buttonBorder}
            buttonExternalStyle={buttonExternalStyle}
            onClick={NameHandler}
            text="Next"
            icon={<AiOutlineArrowRight style={ButtonStyle} />}
          />
        </div>
      </Card>
    </>
  );
};

export default StepName;
