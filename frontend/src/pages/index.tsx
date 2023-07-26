import { Button, Card, SetupLayout } from "@/components";
import GuestRoute from "@/components/RouteProtector/GuestRoute";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiMinutemailer } from "react-icons/si";
const Home = () => {
  const router = useRouter();
  const startRegister = () => {
    router.push("/login");
  };
  const SignInWithGoogle = () => {};
  return (
    <SetupLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className={` cardWrapper`}
      >
        <Card title="Welcome to AudioLounge!" icon="logo">
          <p
            className={`text-lg  text-secondaryTextColor text-justify md:text-center`}
          >
            Welcome to AudioLounge, the ultimate platform for hosting and
            participating in captivating audio events on a wide range of topics.
            Our mission is to create a vibrant space where individuals from all
            walks of life can connect, converse, and share their thoughts in
            real-time, fostering meaningful discussions and knowledge-sharing.
          </p>
          <div
            className={`flex w-full items-center justify-between md:w-[70%]`}
          >
            <Button
              fullWidth
              btnType="primary"
              onClick={startRegister}
              btnText="Sign In with Email"
              icon={<SiMinutemailer className=" text-2xl font-bold   " />}
            />
          </div>
          <div
            className={`flex w-full items-center justify-between md:w-[70%]`}
          >
            <Button
              fullWidth
              className="flex-row-reverse justify-center "
              onClick={SignInWithGoogle}
              btnText="Sign In with Google"
              icon={<FcGoogle className=" text-2xl font-bold " />}
            />
          </div>
        </Card>
      </motion.div>
    </SetupLayout>
  );
};

export default GuestRoute(Home);
