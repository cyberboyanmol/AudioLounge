import { Button, Card } from "@/components/shared";
import React, { useState } from "react";
import styles from "./StepAvatar.module.css";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { authSliceInitialProps } from "@/types";
const StepAvatar = () => {
  const [image, setImage] = useState<string>("/images/monkey-avatar.png");
  const name = useSelector<RootState>((state) => state.auth.user.name) as Omit<
    authSliceInitialProps,
    "accessToken"
  >;
  function captureImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          console.log(image);
          setImage(reader.result);
        }
        //   dispatch
      };
    }
  }

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

  const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter" && event.keyCode === 13) {
      submitHandler();
    }
  };
  const submitHandler = () => {
    console.log("update user ");
  };
  return (
    <>
      <Card title={`Okay, ${name}`} icon="monkey-emoji">
        <p className={styles.subHeading}>{`How's this photo?`}</p>
        <div className={styles.user_avatar}>
          <Image
            src={image}
            alt="user_avatar"
            className={styles.user_img}
            width={40}
            height={40}
          />
        </div>
        <div>
          <input
            onKeyDown={onKeyDownHandler}
            onChange={captureImage}
            id="user_avatar"
            type="file"
            className={styles.user_avatar_input}
          />
          <label className={styles.user_avatar_label} htmlFor="user_avatar">
            choose a different photo
          </label>
        </div>
        <div>
          <Button
            externalStyle={externalStyle}
            onClick={submitHandler}
            text="Next"
            icon={<AiOutlineArrowRight style={ButtonStyle} />}
          />
        </div>
      </Card>
    </>
  );
};

export default StepAvatar;
