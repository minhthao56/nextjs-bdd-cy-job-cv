import { Box } from "@mui/system";
import React from "react";
import { Navbar } from "./components";

export const ExpandLayout: React.FC = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Navbar />
      <Box width="100%">{children}</Box>
    </Box>
  );
};
