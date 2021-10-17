import React from "react";
import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Div extends BoxProps {
  middle?: boolean;
  center?: boolean;
  between?: boolean;
  flexRow?: boolean;
  flexCol?: boolean;
  around?: boolean;
  backgroundColor?: string;
}

export const Div: React.FC<Div> = ({
  children,
  middle,
  center,
  between,
  flexRow,
  flexCol,
  around,
  backgroundColor,
  ...rest
}) => {
  // Check condition render styles
  const checkStyles = () => {
    const styles = {};

    if (flexRow) {
      Object.assign(styles, { display: "flex" });
    }

    if (flexCol) {
      Object.assign(styles, { display: "flex", flexDirection: "column" });
    }

    if (center) {
      Object.assign(styles, { display: "flex", alignItems: "center" });
    }

    if (middle) {
      const styleProps: BoxProps = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };

      Object.assign(styles, styleProps);
    }

    if (between) {
      const styleProps: BoxProps = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      };

      Object.assign(styles, styleProps);
    }
    if (around) {
      const styleProps: BoxProps = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      };

      Object.assign(styles, styleProps);
    }

    return styles;
  };

  const DivMain = styled(Box)(checkStyles(), { backgroundColor });
  return <DivMain {...rest}>{children}</DivMain>;
};
