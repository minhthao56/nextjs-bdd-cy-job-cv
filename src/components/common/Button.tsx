/* eslint-disable import/prefer-default-export */
import React from "react";
import { Button as ButtonBase, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeColors } from "@styles/colors";

interface IButton extends ButtonProps {
  type?: "button" | "submit" | "reset";
  maxWidth?: number | string;
  height?: number | string;
  maxHeight?: number | string;
  width?: number | string;
}
export const Button: React.FC<IButton> = ({
  children,
  type,
  width,
  maxWidth,
  height,
  maxHeight,
  ...rest
}) => {
  const ButtonMain = styled(ButtonBase)({
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: ThemeColors.hoverColorPrimary,
      boxShadow: "none",
    },
    boxShadow: "none",
    width,
    maxWidth,
    height,
    maxHeight,
  });
  return (
    <ButtonMain type={type} {...rest}>
      {children}
    </ButtonMain>
  );
};
