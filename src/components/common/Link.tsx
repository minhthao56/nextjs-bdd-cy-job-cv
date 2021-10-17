import React from "react";
import NextLink, { LinkProps } from "next/link";
import { Span } from "..";

export const Link: React.FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <NextLink {...rest}>
      <Span cursorPointer>{children}</Span>
    </NextLink>
  );
};
