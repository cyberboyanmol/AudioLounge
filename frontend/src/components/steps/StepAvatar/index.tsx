import { Button, Card } from "@/components/shared";
import React, { useState } from "react";
import styles from "./StepAvatar.module.css";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { authSliceInitialProps } from "@/types";
import { StepProps } from "../StepPhoneEmail";
import { externalStylePrevious } from "@/utils";
import { toast } from "react-toastify";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { userEndpoint } from "@/axios/modules/user.api";
const StepAvatar: React.FC<StepProps> = ({ onPrevious }) => {
  const [image, setImage] = useState<string>("/images/monkey-avatar.png");
  const name = useSelector<RootState>((state) => state.auth.user.name) as Omit<
    authSliceInitialProps,
    "accessToken"
  >;

  const axiosPrivate = useAxiosPrivate();

  function captureImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          console.log(image);
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

  const submitHandler = () => {
    console.log("update user ");
    try {
      const response = axiosPrivate.put(userEndpoint.updateUser, {
        name,
        avatar: image,
        activated: true,
      });
    } catch (err) {
      toast.error(err);
    }
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
            onChange={captureImage}
            id="user_avatar"
            type="file"
            className={styles.user_avatar_input}
          />
          <label className={styles.user_avatar_label} htmlFor="user_avatar">
            choose a different photo
          </label>
        </div>
        <div className="actionButtonWrap">
          <Button
            externalStyle={externalStylePrevious}
            onClick={onPrevious}
            text="Previous"
            icon={<AiOutlineArrowLeft style={ButtonStyle} />}
          />
          <Button
            externalStyle={externalStyle}
            onClick={submitHandler}
            text="Submit"
            icon={<AiOutlineArrowRight style={ButtonStyle} />}
          />
        </div>
      </Card>
    </>
  );
};

export default StepAvatar;
