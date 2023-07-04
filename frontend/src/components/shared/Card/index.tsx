import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
type CardProps = {
  title?: string;
  icon?: string;
  children: React.ReactNode;
  cardStyle?: React.CSSProperties;
};

const Card: React.FC<CardProps> = ({ title, icon, children, cardStyle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className={`${styles.card}`}
      style={cardStyle}
    >
      <div className={styles.headingWrapper}>
        {icon && (
          <Image
            src={`/images/${icon}.png`}
            width={40}
            height={40}
            alt="image_logo"
          />
        )}
        {title && <h1 className={styles.heading}>{title}</h1>}
      </div>
      {children}
    </motion.div>
  );
};

export default Card;
