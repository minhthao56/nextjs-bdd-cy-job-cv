import React from "react";
import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface DivProps extends BoxProps {
  middle?: boolean;
  center?: boolean;
  between?: boolean;
  flexRow?: boolean;
  flexCol?: boolean;
  around?: boolean;
  backgroundColor?: string;
  colCenter?: boolean;
  flexStartRow?: boolean;
  flexEndRow?: boolean;
  flexStartCol?: boolean;
  flexEndCol?: boolean;
}

export const Div: React.FC<DivProps> = ({
  children,
  middle,
  center,
  between,
  flexRow,
  flexCol,
  around,
  backgroundColor,
  colCenter,
  flexStartRow,
  flexEndRow,
  flexStartCol,
  flexEndCol,
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

    if (colCenter) {
      Object.assign(styles, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      });
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
    if (flexEndRow) {
      const styleProps: BoxProps = {
        display: "flex",
        justifyContent: "flex-end",
      };

      Object.assign(styles, styleProps);
    }
    if (flexStartRow) {
      const styleProps: BoxProps = {
        display: "flex",
        justifyContent: "flex-start",
      };

      Object.assign(styles, styleProps);
    }

    if (flexEndCol) {
      const styleProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      };

      Object.assign(styles, styleProps);
    }
    if (flexStartCol) {
      const styleProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      };

      Object.assign(styles, styleProps);
    }

    return styles;
  };

  const DivMain = styled(Box)(checkStyles(), { backgroundColor });
  return <DivMain {...rest}>{children}</DivMain>;
};
