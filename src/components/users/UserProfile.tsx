import React, { useContext } from "react";
import { Card, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { UserProfileContext } from "./UserProfileProvider";

const UserProfile: React.FC = () => {
  const context = useContext(UserProfileContext);

  return (
    <Card title="Profile information">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Email: </TableCell>
            <TableCell>{context?.user.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Address: </TableCell>
            <TableCell>{`${context?.user.address.zipCode} ${context?.user.address.city}, ${context?.user.address.country}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default UserProfile;
