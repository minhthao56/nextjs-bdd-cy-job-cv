import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";

import { ThemeColors } from "@styles/colors";
import { Div, Span } from "@src/components/common";
import { Triangle } from "./Triangle";

const Container = styled(Div)({
  backgroundColor: ThemeColors.extraLightGreyColor,
  padding: 8,
  borderTopLeftRadius: 15,
  borderBottomRightRadius: 15,
  display: "flex",
  alignItems: "center",
});

export const Currency = () => {
  return (
    <Container>
      <Image src="/icons/money.png" alt="location" width={16} height={16} />
      <Span
        color={ThemeColors.greyColor}
        marginLeft={1}
        smallFont
        marginRight={1}
      >
        Đăng nhập để xem
      </Span>
      <Triangle />
    </Container>
  );
};
