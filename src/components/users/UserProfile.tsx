import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Table,
  TableBody,
  TableRow,
  TableCell,
  CardHeader,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import {
  UserProfileContext,
  UserProfileContextType,
} from "./UserProfileProvider";
import CreateIcon from "@mui/icons-material/Create";
import _ from "lodash";

const UserProfile: React.FC = () => {
  const { user } = useContext(UserProfileContext) as UserProfileContextType;
  const [initialUser, setInitialUser] = useState(user);
  const [userState, setUserState] = useState(initialUser);
  const [openAboutMeDialog, setOpenAboutMeDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user !== initialUser) {
      setInitialUser(user);
      setUserState(user);
    }
  }, [initialUser, user]);

  const onEditAboutMe = () => {
    setOpenAboutMeDialog(true);
  };

  const onCloseEditAboutMe = () => {
    if (userState) {
      userState.aboutMe = initialUser?.aboutMe ?? "";
      setUserState(userState);
    }
    setOpenAboutMeDialog(false);
  };

  const onAboutMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUser = _.cloneDeep(initialUser);
    if (newUser) {
      newUser.aboutMe = event.target.value;
      setUserState(newUser);
    }
  };

  const onSaveAboutMe = () => {
    setIsSaving(true);
    try {
      // TODO: Call update with request

      setOpenAboutMeDialog(false);
    } catch (error) {
      console.log("Something went wrong. (show in snackbar and log error)");
    } finally {
      setIsSaving(false);
    }
  };

  if (!initialUser) return null;

  return (
    <>
      <Card>
        <CardHeader
          title={"Profile information"}
          action={
            <IconButton>
              <CreateIcon />
            </IconButton>
          }
        />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Email: </TableCell>
              <TableCell>{initialUser.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address: </TableCell>
              <TableCell>{`${initialUser.address.zipCode ?? ""} ${
                initialUser.address.city ?? ""
              }, ${initialUser.address.country ?? ""}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      {initialUser.aboutMe && (
        <>
          <Card sx={{ marginTop: 2 }}>
            <CardHeader
              title={"About Me"}
              action={
                <IconButton onClick={onEditAboutMe}>
                  <CreateIcon />
                </IconButton>
              }
            />
            <CardContent>{initialUser.aboutMe}</CardContent>
          </Card>
          <Dialog
            open={openAboutMeDialog}
            onClose={onCloseEditAboutMe}
            fullWidth
          >
            <DialogTitle>Edit About Me</DialogTitle>
            <DialogContent>
              <TextField
                value={userState?.aboutMe}
                onChange={onAboutMeChange}
                placeholder="Write something about yourself..."
                multiline
                minRows={3}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={onCloseEditAboutMe}>
                Cancel
              </Button>
              <Button
                variant="contained"
                disabled={
                  initialUser.aboutMe === userState?.aboutMe || isSaving
                }
                onClick={onSaveAboutMe}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default UserProfile;
