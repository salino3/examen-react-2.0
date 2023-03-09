import React from 'react';
import {  Routes, Route } from "react-router-dom";
import { CatsPage, DogsPage, Home } from '../scenes';
import { root, dogs } from './interfaces';

export const AppRouter: React.FC = () => {

  return (
    <Routes>
       <Route path={root} element={<Home />}>
      <Route path={root} element={<CatsPage />} />
      <Route path={dogs} element={<DogsPage />} />
       </Route>
    </Routes>
  );
}
