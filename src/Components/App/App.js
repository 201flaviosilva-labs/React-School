import React from "react";
import { BrowserRouter } from "react-router-dom";

import PageProvider from "../../Context/PageContext";

import Header from "../Header";
import Main from "../Main";

export default function App() {
  return (
    <PageProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </PageProvider>
  );
}

