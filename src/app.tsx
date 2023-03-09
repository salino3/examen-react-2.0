import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { MyProvider } from "./core/myProvider";
import { AppRouter } from "./router/AppRouter";
import { Aside } from "./scenes";

export const App: React.FC = () => {
  return (
    <MyProvider>
      <BrowserRouter>
        <Header />
        <Aside />
        <AppRouter />
      </BrowserRouter>
    </MyProvider>
  );
};
