import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Heroes from './components/Heroes';
import HeroForm from './components/HeroForm';
import reactLogo from "./assets/react.svg";
import heroes from './heroes';

function App() {
	const [heroList, setHeroList] = useState(heroes);
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/heroes' element={<Heroes heroList={heroList} />} />
        <Route path='/addHero' element={<HeroForm setHeroList={setHeroList} heroList={heroList} />} />
      </Routes>
    </>
  );
}

export default App;
