import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";

import { ThemeColors } from "@styles/colors";
import { Dot } from "./Dot";
import { Currency } from "./Currency";
import { Div, Span } from "@src/components/common";

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
export const SmallJobCard = () => {
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
