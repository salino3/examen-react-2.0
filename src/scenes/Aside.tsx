import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { AsideContainer } from '../layout'
import { MyState, PictureInfo, GlobalData } from "../core/";
import { ListAside } from '../components';



export const Aside: React.FC = () => {

  const { pets, CheckboxChange } = React.useContext<MyState>(GlobalData);

   const list = pets?.filter((item: PictureInfo) => item.selected === true);

   const handleClick = () => {
  list.map((item: PictureInfo) => CheckboxChange(item.id))
   };


  return (
    <AsideContainer>
      
      <Typography variant="h4">&nbsp; Aside</Typography>
      <Button onClick={handleClick} variant="contained" className="btnCart">
        <b>Empty cart</b>
      </Button>
      <Box>
       <Box className='item2'>
        <LocalGroceryStoreOutlinedIcon className="myCart" />{" "}
        <Typography variant='h5'>Your Cart</Typography>
       </Box>
        <ListAside list={list} CheckboxChange={CheckboxChange} />
      </Box>
    </AsideContainer>
  );
}
