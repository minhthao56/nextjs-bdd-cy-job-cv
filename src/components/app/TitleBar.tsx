import React from "react";
import Image from "next/image";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Div, Link, Span } from "@src/components/common";

const Container = styled(Box)({
  background: `transparent linear-gradient(270deg, #0E51D0 0%, #042C8E 100%) 0% 0% no-repeat padding-box;`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "60px",
  paddingLeft: "20px",
  paddingRight: "20px",
  borderTopLeftRadius: "30px",
  borderBottomRightRadius: "30px",
  marginBottom: "38px",
});
export const TitleBar = () => {
  return (
    <Container>
      <Span color="white" fontSize="20px" fontWeight="500">
        Việc Làm Mới Nhất
      </Span>
      <Div>
        <Link
          nextProps={{ href: "/" }}
          color="#fff"
          muiProps={{ marginRight: 1 }}
        >
          Xem tất cả
        </Link>
        <Image src="/icons/see-all.png" alt="" width={14} height={10} />
      </Div>
    </Container>
  );
};
