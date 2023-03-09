import React from "react";
import { TextField, Button } from "@mui/material";
import "./stylesComponents.scss";

export const InputNav: React.FC = () => {

  
  return (
    <form >
      <label  className="lblInput">
        Label Input
      </label>
      <br />
      <TextField
        type="text"
        className="inputNav"
        required
      />

      <Button
       variant="contained"
        type="submit"
        className="btnInput"
      >
        Search
      </Button>
    </form>
  );
};
