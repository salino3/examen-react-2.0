import React from "react";
import { PetsList } from "../common/PetsList";
import { GlobalData, MyState } from "../core";
import { HomeContainer } from "../layout";


export const CatsPage: React.FC = () => {

   const { pets, CheckboxChange } = React.useContext<MyState>(GlobalData);

  return (
    <HomeContainer>
      <PetsList
        pets={pets}
        whatPet={"cat"}
        CheckboxChange={CheckboxChange}
      />
    </HomeContainer>
  );
};
