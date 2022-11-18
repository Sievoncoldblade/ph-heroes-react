import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
