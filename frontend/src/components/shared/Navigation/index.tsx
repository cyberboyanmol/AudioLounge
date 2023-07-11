import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { GiMicrophone, MdOutlineLogout } from "@/utils";
import { motion } from "framer-motion";

import { useRouter } from "next/router";
import { RootState, persistor } from "@/store";
import { useSelector } from "react-redux";
import { axiosPrivate } from "@/hooks/useAxiosPrivate";
import { userEndpoint } from "@/axios/modules/user.api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { resetUser } from "@/store/slices/auth";
import { setAccessToken } from "@/store/slices/accessToken";
import { authSliceInitialProps } from "@/types";

const Navigation = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isHome = router.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector<RootState, authSliceInitialProps["user"]>(
    (state) => state.auth.user
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const LogoutHandler = async () => {
    try {
      const response = await axiosPrivate.get(userEndpoint.logout);
      toast.success("response.data.data.message");
      console.log(response.data.data);
      dispatch(resetUser());
      localStorage.clear();
      await persistor.purge();
      dispatch(
        setAccessToken({
          accessToken: "",
        })
      );
      router.replace("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <Link href={"/"} className={styles.brandLogo}>
        <GiMicrophone className={styles.logo} />
        <span className={styles.brandName}>AudioLounge</span>
      </Link>
      {user.activated && (
        <div className={styles.userProfile} onClick={toggleMenu}>
          <div className={styles.userProfileLEft}>
            <h3 className={styles.h3}>{user.name}</h3>
            <Image
              src={user ? user.avatar : "/images/monkey-avatar.png"}
              width={40}
              height={40}
              className={styles.Avatar}
              alt="user_avatar"
            />
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              className={styles.userProfileRight}
            >
              <Link href={`/profile/${user.userId}`} className={styles.myProfile}>
                My profile
              </Link>
              <span className={styles.logoutBtn} onClick={LogoutHandler}>
                <> Logout</> <MdOutlineLogout />
              </span>
            </motion.div>
          )}
        </div>
      )}

      {!user.activated && isHome && (
        <Link href={"/login"} className={styles.getStarted}>
          Get Started
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
