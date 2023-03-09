import React from "react";
import { Box, Checkbox, Typography, TextField } from "@mui/material";
import { HomeContainer } from "../layout";
import { Link, Outlet } from "react-router-dom";
import { dogs, root } from "../router/interfaces";
import "./scenesStyles.scss";

export const Home: React.FC = () => {

  return (
    <HomeContainer>
      <Typography variant="h6" className="boxLinks">
        <Link to={root}>Kitties</Link>
        <Link to={dogs}>Puppies</Link>
      </Typography>
      <Outlet />
    </HomeContainer>
  );
};
