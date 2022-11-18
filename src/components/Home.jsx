import React, { Component } from "react";
import { Link } from "react-router-dom";

function Home () {
  return (
    <header className='container flex flex-col justify-center items-center max-w-full min-h-screen self-center -mt-20'>
      <img className='hover:opacity-80' src='/logo-amber.png' width='400' />
      <h1 className='text-lg text-amber-400 -mt-2'>With great power comes great responsibility.</h1>
      <Link to='/heroes/'>
        <button className='p-3 bg-amber-400 text-neutral-800 font-semibold rounded-2xl mt-4 hover:border-4 border-amber-700 hover:text-amber-800 transition-all'>Get to know them</button>
      </Link>
    </header>
  );
}

export default Home;
