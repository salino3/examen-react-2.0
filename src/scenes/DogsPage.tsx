import React from 'react'
import { PetsList } from '../common/PetsList'
import { MyState, GlobalData } from '../core';
import { HomeContainer } from '../layout';



export const DogsPage: React.FC = () => {

     const { pets, CheckboxChange } = React.useContext<MyState>(GlobalData);


  return (
    <HomeContainer>
      <PetsList
        pets={pets}
        whatPet={"dog"}
        CheckboxChange={CheckboxChange}
      />
    </HomeContainer>
  );
};
