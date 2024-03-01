import React from "react";
import "./NavBarStyles.css";
import { Link } from "react-router-dom";
import { Button, Toolbar, AppBar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Button component={RouterLink} to="/">
        Users
      </Button>
      <Button component={RouterLink} to="/profile">
        Profile
      </Button>
    </div>
  );
};

export default NavBar;
