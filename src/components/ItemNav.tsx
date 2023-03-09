import React from 'react';
import { Button, Box, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


export const ItemNav: React.FC = () => {

    
  return (
    <Box className="box1Navbar">
      <Box>
        <Button variant="contained" type="submit">
          <HomeOutlinedIcon />
        </Button>
      </Box>
      <Typography variant="h3">Nav Bar</Typography>{" "}
    </Box>
  );
}
