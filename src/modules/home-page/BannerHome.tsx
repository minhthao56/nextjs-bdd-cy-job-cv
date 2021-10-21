import React from "react";
import Image from "next/image";
import { Button, Div, Section } from "@src/components/common";
import { SearchBar } from "@src/components/app";

export const BannerHome = () => {
  return (
    <Div position="relative" width="100%" height="520px" mb={5}>
      <Image
        src="/images/banner-home.svg"
        alt="banner-home"
        layout="fill"
        objectFit="cover"
      />
      <Section>
        <Div>
          <Button variant="contained">Tạo CV Online</Button>
          <Button variant="contained">Tải CV lên</Button>
        </Div>
        <Div>
          <SearchBar />
        </Div>
      </Section>
    </Div>
  );
};
