import React from "react";
import Image from "next/image";
import { Button, Div, Section, Span } from "@src/components/common";
import { SearchBar } from "@src/components/app";
import theme from "@styles/theme";

export const BannerHome = () => {
  return (
    <Div position="relative" width="100%" height="520px" mb={5}>
      <Image
        src="/images/banner-home.svg"
        alt="banner-home"
        layout="fill"
        objectFit="cover"
      />
      <Section position="relative" zIndex={2} heightContent={"100%"}>
        <Div height={"100%"} flexEndCol pb={6}>
          <Span color="white" opacity={0.7} maxWidth={"40%"} mb={5}>
            Hàng ngàn việc làm tại đây. <br /> Tìm công việc mới của bạn ngày
            hôm nay! Công việc mới đăng hàng ngày.
          </Span>
          <Div center mb={6}>
            <Button variant="contained" width={160} height={44}>
              <Image
                src="/icons/add-cv-home.svg"
                width={22}
                height={22}
                alt=""
              />
              <Div pl={0.5}>Tạo CV Online</Div>
            </Button>
            <Button
              variant="contained"
              width={160}
              height={44}
              color="secondary"
              marginLeft={20}
            >
              <Image
                src="/icons/upload-cv-home-1.svg"
                width={22}
                height={22}
                alt=""
              />
              <Div pl={0.5} color={theme.palette.primary.main}>
                {" "}
                Tải CV lên
              </Div>
            </Button>
          </Div>
          <Div
            backgroundColor="white"
            center
            height={60}
            borderRadius={"4px"}
            boxShadow="0px 3px 6px #909BA533"
          >
            <SearchBar />
          </Div>
        </Div>
      </Section>
    </Div>
  );
};
