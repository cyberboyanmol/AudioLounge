import { Button, Card } from "@/components/shared";
import React, { useState } from "react";
import styles from "./StepAvatar.module.css";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
const StepAvatar = () => {
  const [image, setImage] = useState<string>("/images/monkey-avatar.png");
  const name = "anmol";
  const avatar = "d";
  function captureImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setImage(reader.result);
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

  const submitHandler = () => {};
  return (
    <>
      <Card title={`Okay, ${"Anmol Gangwar"}`} icon="monkey-emoji">
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
