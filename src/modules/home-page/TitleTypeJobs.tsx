import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Link, Span } from "@src/components";
import React from "react";

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
});

export const TitleTypeJobs = () => {
  return (
    <Container>
      <Span color="white" fontSize="20px" fontWeight="500">
        Việc Làm Mới Nhất
      </Span>
      <Link nextProps={{ href: "/" }}>Xem tất cả</Link>
    </Container>
  );
};
