import React from "react";
import { User } from "../../clients/UserClient";
import { Box, Typography, Stack, SvgIcon } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";

type UserProfileHeaderProps = {
  user: User;
};

const UserProfileHeader: React.FC<UserProfileHeaderProps> = (props) => {
  const { user } = props;

  return (
    <Box>
      <Stack direction={"row"}>
        <SvgIcon fontSize="large">
          <PersonIcon />
        </SvgIcon>
        <Box ml={2}>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1">{user.title}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default UserProfileHeader;
