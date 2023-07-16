import { Button, Card, TextInput } from "@/components/shared";
import { RootState } from "@/store";
import { StepProps, authSliceInitialProps } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineUser,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const StepAvatar: React.FC<StepProps> = ({ onNext, onPrevious }) => {
  const [image, setImage] = useState<string>(
    "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=740"
  );
  const user = useSelector<RootState, authSliceInitialProps["user"]>(
    (state) => state.auth.user
  );

  const router = useRouter();
  const dispatch = useDispatch();
  //   const axiosPrivate = useAxiosPrivate();

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
      };
    }
  }

  const ButtonStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  const submitHandler = async () => {
    console.log("update user ");
    // try {
    //   console.log(user);
    //   const response = await axiosPrivate.put(userEndpoint.updateUser, {
    //     name: user.name,
    //     avatar: image,
    //     activated: true,
    //   });
    //   console.log(response.data);
    //   const userData = { ...user, avatar: image, activated: true };
    //   dispatch(setUser({ user: userData }));
    //   router.replace("/dashboard");
    // } catch (err) {
    //   console.error(err);
    // }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={`cardWrapper `}
    >
      <Card title="What’s your full name?" icon="goggle-emoji">
        <p className={`text-secondaryTextColor`}>{`How's this photo?`}</p>
        <div className={` w-32 h-32 p-1 bglinearGradient rounded-full  `}>
          <Image
            src={image}
            alt="user_avatar"
            className={`w-full h-full    object-cover rounded-full `}
            width={40}
            height={40}
          />
        </div>
        <div>
          <input
            onChange={captureImage}
            id="user_avatar"
            type="file"
            className={`hidden`}
          />
          <label
            className={`text-indigoColor transition-all  duration-200 ease-in-out cursor-pointer`}
            htmlFor="user_avatar"
          >
            choose a different photo
          </label>
        </div>
        <div className={`flex w-full items-center justify-between `}>
          <Button
            className="flex-row-reverse"
            btnType="secondary"
            onClick={onPrevious}
            btnText="Previous"
            icon={<AiOutlineArrowLeft className=" text-lg font-bold " />}
          />
          <Button
            btnType="primary"
            onClick={submitHandler}
            btnText="Submit"
            // icon={<AiOutlineArrowRight className=" text-lg font-bold " />}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default StepAvatar;
