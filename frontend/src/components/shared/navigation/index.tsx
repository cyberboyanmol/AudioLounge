import { RootState } from "@/store";
import { authSliceInitialProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiMicrophone } from "react-icons/gi";

const Navigation = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isHome = router.pathname === "/";

  const user = useSelector<RootState, authSliceInitialProps["user"]>(
    (state) => state.auth.user
  );

  return (
    <nav className={` py-5 flex  items-center justify-between container`}>
      <Link href={"/"} className={`flex items-center`}>
        <GiMicrophone className={`text-pinkColor1 font-bold w-8  h-8 `} />
        <span className={` textLinearGradient   text-2xl  font-bold  `}>
          AudioLounge
        </span>
      </Link>

      {!user.activated && isHome && (
        <Link
          href={"/login"}
          className={`bglinearGradient  text-md  rounded-3xl   py-2 px-5 font-medium  cursor-pointer  shadow-lg `}
        >
          Get Started
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
