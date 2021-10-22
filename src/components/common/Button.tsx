/* eslint-disable import/prefer-default-export */
import React from "react";
import {
  Button as ButtonBase,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeColors } from "@styles/colors";

interface ButtonProps extends MuiButtonProps {
  type?: "button" | "submit" | "reset";
  maxWidth?: number | string;
  height?: number | string;
  maxHeight?: number | string;
  width?: number | string;
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "full-width"
    | "full-size-kana";
  marginLeft?: number | string;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  width,
  maxWidth,
  height,
  maxHeight,
  textTransform,
  marginLeft,
  ...rest
}) => {
  const ButtonMain = styled(ButtonBase)({
    "&:hover": {
      backgroundColor: ThemeColors.hoverColorPrimary,
      boxShadow: "none",
    },
    boxShadow: "none",
    width,
    maxWidth,
    height,
    maxHeight,
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
    marginLeft,
  });
  return (
    <ButtonMain type={type} {...rest}>
      {children}
    </ButtonMain>
  );
};
