import React from "react";
import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Span extends TypographyProps {
  cursorPointer?: boolean;
  smallFont?: boolean;
  maxLine?: number;
}

export const Span: React.FC<Span> = ({
  children,
  cursorPointer,
  smallFont,
  maxLine,
  ...rest
}) => {
  // Check condition render styles
  const checkStyles = () => {
    const styles = {};
    if (cursorPointer) {
      Object.assign(styles, { cursor: "pointer" });
    }
    if (smallFont) {
      Object.assign(styles, { fontSize: "13px" });
    }

    return styles;
  };

  const Text = styled(Typography)(checkStyles(), {
    display: "-webkit-box",
    WebkitLineClamp: maxLine || "none",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  });

  return <Text {...rest}>{children}</Text>;
};
