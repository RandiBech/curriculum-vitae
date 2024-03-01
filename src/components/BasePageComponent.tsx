import React from "react";
import { Box } from "@mui/material";

type BasePageComponentProps = {
  header?: React.ReactNode;
  tabs?: React.ReactNode;
  children: React.ReactNode;
};

const BasePageComponent: React.FC<BasePageComponentProps> = (props) => {
  const { header, tabs, children } = props;

  return (
    <Box height={"100vh"}>
      {(header || tabs) && (
        <Box
          sx={{ backgroundColor: "white" }}
          height={tabs ? "130px" : "100px"}
          width={"100%"}
        >
          {header}
          {tabs}
        </Box>
      )}
      <Box mt={2}>{children}</Box>
    </Box>
  );
};

export default BasePageComponent;
