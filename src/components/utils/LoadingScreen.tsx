import { Box, LinearProgress } from "@mui/material";
import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <LinearProgress />
    </Box>
  );
};

export default LoadingScreen;
