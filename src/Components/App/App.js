import React from "react";
import { HashRouter } from "react-router-dom";

import PageProvider from "../../Context/PageContext";

import Header from "../Header";
import Main from "../Main";

export default function App() {
  return (
    <PageProvider>
      <HashRouter>
        <Header />
        <Main />
      </HashRouter>
    </PageProvider>
  );
}

