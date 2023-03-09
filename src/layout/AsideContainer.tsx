import React from "react";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Button, Typography } from "@mui/material";
import "./styles.scss";

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const AsideContainer: React.FC<Props> = ({ children }) => {

  const [toggleBtn, setToggleBtn] = React.useState(true);
 
    return (
      <aside className={` ${toggleBtn ? 'asideContainer1' : 'asideContainer2' }`}>
        <Button onClick={() => setToggleBtn(!toggleBtn)}>
          <Typography variant="h6">{toggleBtn ? ">>" : "<<"} <LocalGroceryStoreOutlinedIcon /></Typography>
        </Button>
        {toggleBtn && children}
      </aside>
    );
};
