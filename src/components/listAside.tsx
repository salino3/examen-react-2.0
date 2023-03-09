import React from 'react';
import { PictureInfo } from '../core';
import { Box, Typography } from "@mui/material";
import {  Delete } from "@mui/icons-material";



interface Props {
  list: PictureInfo[];
  CheckboxChange: (id: string) => void;
}

export const ListAside: React.FC<Props> = (props) => {
    const {list, CheckboxChange} = props;
    

  return (
    <Box>
      {!list || list.length < 1 ? (
        <Typography className="txtEmpty" variant="h5">
          <u>The Cart is Empty</u>
        </Typography>
      ) : (
        list &&
        list.map((item: PictureInfo) => (
          <Box className={"listAside"} key={item.id}>
            <img src={`${item.picUrl}`} width="50" alt="pet" />
            <Typography className="item1">
              <b>{item.title}</b>
            </Typography>
            <Delete
              className="item1"
              onClick={() => {
                CheckboxChange(item.id);
              }}
            />
          </Box>
        ))
      )}
    </Box>
  );
};
