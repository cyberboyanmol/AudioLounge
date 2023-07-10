import Head from "next/head";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { SiMinutemailer } from "react-icons/si";

import { useRouter } from "next/router";
import { Button, Card } from "@/components";
import GuestRoute from "@/components/ProtectedPage/GuestRoute";
const Home = () => {
  const router = useRouter();
  const startRegister = () => {
    router.push("/login");
  };

  const ButtonStyle = {
    fontSize: "1.4rem",
    fontWeight: "bold",
  };

  const externalStyleGoogle = {
    width: "100%",
    gap: ".6rem",
    justifyContent: "center",
    flexDirection: "row-reverse",
  };

  const buttonExternalStyle = {
    background: "var(--primaryBgColor)",
    color: "var(--primaryTextColor)",
    width: "100%",
  };

  const buttonBorder = {
    width: "100%",
    background: "var(--linearGradient)",
  };
  const SignInWithGoogle = () => {};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={` cardWrapper`}
    >
      <Card title="Welcome to AudioLounge!" icon="logo">
        <p className={styles.text}>
          Welcome to AudioLounge, the ultimate platform for hosting and
          participating in captivating audio events on a wide range of topics.
          Our mission is to create a vibrant space where individuals from all
          walks of life can connect, converse, and share their thoughts in
          real-time, fostering meaningful discussions and knowledge-sharing.
        </p>
        <div className={styles.actionButtonWrap}>
          <Button
            buttonBorder={buttonBorder}
            buttonExternalStyle={buttonExternalStyle}
            onClick={startRegister}
            text="Sign In with Email"
            icon={<SiMinutemailer style={ButtonStyle} />}
          />
        </div>
        <div className={styles.actionButtonWrap}>
          <Button
            buttonExternalStyle={externalStyleGoogle}
            onClick={SignInWithGoogle}
            text="Sign In with Google"
            icon={<FcGoogle style={ButtonStyle} />}
          />
        </div>
        {/* <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
        </div> */}
      </Card>
    </motion.div>
  );
};

export default GuestRoute(Home);
