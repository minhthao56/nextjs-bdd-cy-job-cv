import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";

import { Div, Span } from "..";
import { ThemeColors } from "@styles/colors";

const Dot = () => {
  return (
    <Div
      width={4}
      height={4}
      borderRadius={4}
      backgroundColor={ThemeColors.lightGreyColor}
      marginLeft={1}
    />
  );
};
const Currency = () => {
  const Container = styled(Div)({
    backgroundColor: ThemeColors.extraLightGreyColor,
    padding: 8,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    display: "flex",
    alignItems: "center",
  });

  return (
    <Container>
      <Image src="/icons/money.png" alt="location" width={16} height={16} />
      <Span color={ThemeColors.greyColor} marginLeft={1} smallFont>
        Đăng nhập để xem
      </Span>
    </Container>
  );
};

export const SmallJobCard = () => {
  const Container = styled(Div)({
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: ThemeColors.borderGreyColor,
    borderRadius: "8px",
    padding: 15,
    width: "100%",
    maxWidth: "437px",
    cursor: "pointer",
  });

  return (
    <Container>
      <Div marginBottom={1} center>
        <Div marginRight={1}>
          <Span fontWeight="500" marginBottom={0.2} maxLine={1}>
            Chuyên Viên Công Nghệ Sản Xuất ( Thực Phẩm) Chuyên Viên Công Nghệ
            Sản Xuất ( Thực Phẩm)
          </Span>
          <Span color={ThemeColors.greyColor}>Memberson Pte Ltd</Span>
        </Div>
        <Image
          src="/images/logo-test.png"
          alt="location"
          width={150}
          height={95}
        />
      </Div>

      <Div between>
        <Div center>
          <Image
            src="/icons/map-marker.png"
            alt="location"
            width={12}
            height={16}
          />
          <Span color={ThemeColors.greyColor} marginLeft={1} smallFont>
            Hồ Chí Minh
          </Span>

          <Dot />
          <Span color={ThemeColors.greyColor} marginLeft={1} smallFont>
            2 ngày trước
          </Span>
        </Div>
        <Currency />
      </Div>
    </Container>
  );
};
