import React from 'react';
import { BrowserRouter } from "react-router-dom";

import PageProvider from "./Context/PageContext";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const a = "";

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

