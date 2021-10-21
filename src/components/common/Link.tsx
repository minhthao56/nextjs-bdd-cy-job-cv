import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

import { styled } from "@mui/material/styles";

interface Link {
  nextProps: NextLinkProps;
  muiProps?: MuiLinkProps;
  color?: string;
}

export const Link: React.FC<Link> = ({
  children,
  nextProps,
  muiProps,
  color,
}) => {
  const ItemMenu = styled(MuiLink)({
    color: color || "#222222",
    textDecoration: "none",
  });
  return (
    <NextLink passHref {...nextProps}>
      <ItemMenu {...muiProps}>{children}</ItemMenu>
    </NextLink>
  );
};
