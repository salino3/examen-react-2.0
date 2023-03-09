import React from "react";
import { InputNav } from "./InputNav";
import { ItemNav } from "./ItemNav";
import "./stylesComponents.scss";


export const NavBar: React.FC = () => {
  
  return (
    <nav>
      <ItemNav />
        <InputNav />
    </nav>
  );
};
