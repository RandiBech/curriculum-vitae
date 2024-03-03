import React from "react";
import "./NavBarStyles.css";
import { NavLink as NavLinkBase } from "react-router-dom";
import { Button, Typography, Divider, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Paths } from "./Paths";

type NavLinkProps = {
  path: string;
  children: React.ReactNode;
};

const NavLink = styled((props: NavLinkProps) => (
  <Button component={NavLinkBase} {...props} to={props.path} />
))(() => ({
  textDecoration: "none",
  color: "white",
  textAlign: "left",
  justifyContent: "start",

  "&.hover": {
    backgroundColor: "#8FA5C5",
  },
  "&.active": {
    backgroundColor: "#8FA5C5",
  },
}));

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar-content">
        <Typography color={"white"} variant="h6" mb={2} textAlign={"center"}>
          Curriculum Vitae
        </Typography>
        <Divider sx={{ backgroundColor: "white" }} />
        <Box mt={2} />
        <NavLink path="/">Home</NavLink>
        <NavLink path={Paths.User}>Profile</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
