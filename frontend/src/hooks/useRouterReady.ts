import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useRouterReady = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.isReady) {
      setLoading(false);
    }
  }, [router.isReady]);

  return { loading, router };
};

export default useRouterReady;
