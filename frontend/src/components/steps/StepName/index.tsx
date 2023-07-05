import React, { useState } from "react";

import styles from "./StepName.module.css";
import { StepProps } from "../StepPhoneEmail";
import { Button, Card, TextInput } from "@/components/shared";
import { AiOutlineArrowRight, AiOutlineUser } from "react-icons/ai";

const StepName: React.FC<StepProps> = ({ onNext }) => {
  const [fullname, setFullname] = useState("");

  function NameHandler() {
    if (!fullname) {
      return;
    }

    onNext();
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
  return (
    <>
      <Card title="What’s your full name?" icon="goggle-emoji">
        <TextInput
          icon={<AiOutlineUser className={styles.InputIcon} />}
          value={fullname}
          placeholder="ex: John wick"
          onChange={(e) => setFullname(e.target.value)}
        />
        <p className={styles.paragraph}>
          People use real names at AudioLounge :) !
        </p>
        <div>
          <Button
            externalStyle={externalStyle}
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
