import React from 'react';
import { Data } from '../api/data';
import { GlobalData } from './GlobalContext';
import { PictureInfo } from './interfaces';

interface Props {
 children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({children}) => {
  
  const [pets, setPets] = React.useState<PictureInfo[]>(Data);


//* CheckboxChange
 const CheckboxChange = React.useCallback( (id: string) => {

      setPets((prevPets) =>
        prevPets.map((pet) =>
          pet.id === id ? { ...pet, selected: !pet.selected } : pet
        )
      );
    },
    [setPets]
  );


  return (
    <GlobalData.Provider value={{ pets, setPets, CheckboxChange }}>
      {children}
    </GlobalData.Provider>
  );
}
