import React, { useState } from "react";
import styles from "./stepPhoneEmail.module.css";
import Image from "next/image";
import StepOtp from "../Stepotp";
import Phone from "./Phone";
import Email from "./Email";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";
export type ButtonProps = {
  type: string;
  image: string;
};

export type phoneEmailMapProps = {
  [key: string]: React.FC<StepProps>;
};

const phoneEmailMap: phoneEmailMapProps = {
  phone: Phone,
  email: Email,
};

export type StepProps = {
  onNext: () => void;
};

const StepPhoneEmail: React.FC<StepProps> = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  const buttonArray: ButtonProps[] = [
    {
      type: "phone",
      image: "phone-white",
    },
    {
      type: "email",
      image: "mail-white",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={`cardWrapper ${styles.cardWrapperStep}`}
    >
      {/* <div className={`${styles.StepPhoneEmail}`}>
        <div className={styles.buttonWrap}>
          <div className={styles.phoneAndEmail}>
            {buttonArray.map((btn, index) => {
              return (
                <div
                  key={btn.type + index}
                  className={`${styles.TabButton} ${
                    type === btn.type ? styles.active : ""
                  }`}
                  onClick={() => setType(btn.type)}
                >
                  <Image
                    src={`/images/${btn.image}.png`}
                    alt={`${btn.type}`}
                    className={styles.BtnImage}
                    width={40}
                    height={40}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      <Email onNext={onNext} />
    </motion.div>
  );
};

export default StepPhoneEmail;
