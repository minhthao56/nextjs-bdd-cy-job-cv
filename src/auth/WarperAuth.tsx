import { MainLayout } from "@src/layouts";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getCookieFromBrowser } from "./cookies";

export const WarperAuth: React.FC = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    const token = getCookieFromBrowser("token");

    if (!token && pathname !== "/login") {
      window.location.replace("/login");
    }
  }, [pathname]);

  return <MainLayout>{children}</MainLayout>;
};
