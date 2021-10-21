import React from "react";

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  width?: string;
  height?: string;
  maxHeight?: string;
  maxWidth?: string;
  color?: string;
  zIndex?: number;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
}

export const Form: React.FC<FormProps> = ({
  children,
  width,
  height,
  maxHeight,
  maxWidth,
  color,
  zIndex,
  position,
  ...rest
}) => {
  return (
    <form
      {...rest}
      style={{ width, height, maxHeight, maxWidth, color, zIndex, position }}
    >
      {children}
    </form>
  );
};
