import React from "react";
import { Box } from "@mui/system";
import { Navbar } from "./components";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Navbar />
      <Box maxWidth={1341} width="100%">
        {children}
      </Box>
    </Box>
  );
};
