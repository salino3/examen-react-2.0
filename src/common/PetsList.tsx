import { Checkbox, Typography, Box } from '@mui/material';
import React from 'react';
import { PictureInfo } from '../core';

interface Props {
    pets: PictureInfo[];
    whatPet: string;
    CheckboxChange: (id: string) => void;
};


export const PetsList: React.FC<Props> = (props) => {
    const { pets, whatPet, CheckboxChange} = props;

  return (
    <>
      {pets &&
        Array.isArray(pets) &&
        pets
          .filter((pet: PictureInfo) => pet.title.includes(whatPet))
          .map((pet: PictureInfo) => (
            <Box className="card" key={pet.id}>
              <img width={"200"} src={pet?.picUrl} alt="pet" />
              <Box className="texts">
                <Typography>{pet?.title}</Typography>
                <Box className="myCheckBox">
                    <Box>Buy</Box>
                  <Checkbox
                    onClick={() => CheckboxChange(pet?.id)}
                    checked={pet?.selected}
                  />
                </Box>
              </Box>
            </Box>
          ))}
    </>
  );
}
