import React, { useEffect, useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import NextLink, { LinkProps } from "next/link";
import { Button } from "@src/components";

const LinkMenu: React.FC<LinkProps> = ({ children, href, ...rest }) => {
  const { pathname } = useRouter();

  const ItemMenu = styled(Typography)(({ theme }) => ({
    padding: "8px 18px",
    fontWeight: 500,
    color: pathname === href ? theme.palette.primary.main : "",
    cursor: "pointer",
  }));
  return (
    <NextLink {...rest} href={href}>
      <ItemMenu>{children}</ItemMenu>
    </NextLink>
  );
};

export const Navbar = () => {
  const [halfEmptySpace, setHalfEmptySpace] = useState(0);

  useEffect(() => {
    const bodyClientWidth = document.body.clientWidth;
    const emptySpace = (bodyClientWidth - 1341) / 2;
    setHalfEmptySpace(emptySpace);
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      paddingX={2}
      height={80}
      justifyContent="space-between"
    >
      <Image src="/images/logo.png" width={75} height={44} alt="logo" />
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        maxWidth={1341 + halfEmptySpace}
        justifyContent="space-between"
      >
        <Box display="flex">
          <LinkMenu href="/">TRANG CHỦ</LinkMenu>
          <LinkMenu href="/jobs">VIỆC LÀM</LinkMenu>
          <LinkMenu href="/jobs">MẪU CV</LinkMenu>
          <LinkMenu href="/jobs">TIỆN ÍCH</LinkMenu>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography>NHÀ TUYỂN DỤNG</Typography>
          <Image src="/images/vietnam.png" width={36} height={24} alt="VN" />
          <Button color="primary" variant="contained" height={44} width={112}>
            Đăng Nhập
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
