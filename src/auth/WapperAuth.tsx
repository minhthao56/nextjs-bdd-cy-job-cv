import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import { getCookieFromBrowser } from "./cookies";

export const WapperAuth: React.FC = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    const token = getCookieFromBrowser("token");

    if (!token && pathname !== "/login") {
      window.location.replace("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
};
