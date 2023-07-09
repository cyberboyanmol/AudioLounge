import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { GiMicrophone, MdOutlineLogout } from "@/utils";
import { motion } from "framer-motion";

import { useRouter } from "next/router";

const Navigation = () => {
  const user = "/images/monkey-avatar.png";
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = false;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const logoutUser = async () => {
    try {
      router.push("/");
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
      {isAuthenticated && (
        <div className={styles.userProfile} onClick={toggleMenu}>
          <div className={styles.userProfileLEft}>
            <h3 className={styles.h3}>Anmol Gangwar</h3>
            <Image
              src={user ? user : "/images/monkey-avatar.png"}
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
              <Link href="/my-pofile" className={styles.myProfile}>
                My profile
              </Link>
              <span className={styles.logoutBtn} onClick={logoutUser}>
                <> Logout</> <MdOutlineLogout />
              </span>
            </motion.div>
          )}
        </div>
      )}
      {!isAuthenticated && isHome && (
        <Link href={"/login"} className={styles.getStarted}>
          Get Started
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
