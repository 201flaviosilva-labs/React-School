import React from "react";
import { BrowserRouter } from "react-router-dom";

import PageProvider from "../../Context/PageContext";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

export default function App() {
  return (
    <>
      <PageProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </PageProvider>
    </>
  );
}

