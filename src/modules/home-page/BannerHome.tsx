import React from "react";
import Image from "next/image";
import { Div } from "@src/components";

export const BannerHome = () => {
  return (
    <Div position="relative" width="100%" height="28vw">
      <Image src="/images/banner-home.png" alt="banner-home" layout="fill" />
    </Div>
  );
};
