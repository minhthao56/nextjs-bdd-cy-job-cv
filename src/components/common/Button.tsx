/* eslint-disable import/prefer-default-export */
import React from "react";
import { Button as ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonMain = styled(ButtonBase)({
  backgroundColor: "red",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
});

interface IButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}
export const Button: React.FC<IButton> = ({ children, onClick, type }) => {
  return (
    <ButtonMain onClick={onClick} type={type}>
      {children}
    </ButtonMain>
  );
};
