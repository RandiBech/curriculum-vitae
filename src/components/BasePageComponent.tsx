import React from "react";
import { Box } from "@mui/material";

type BasePageComponentProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

const BasePageComponent: React.FC<BasePageComponentProps> = (props) => {
  const { header, children } = props;

  return (
    <>
      {header}
      <Box mt={2}>{children}</Box>
    </>
  );
};

export default BasePageComponent;
