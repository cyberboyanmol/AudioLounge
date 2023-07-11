import { useRouter } from "next/router";
import React from "react";

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;

  return <div>{`${username}`}</div>;
};

export default UserProfile;
