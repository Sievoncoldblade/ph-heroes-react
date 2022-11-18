import React, { Component } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='container flex gap-4 bg-amber-400 text-neutral-800 font-medium p-4'>
      <Link className='self-center hover:opacity-80' to='/'>
        <img src='/logo.png' width='120' />
      </Link>
      <Link className='self-center hover:opacity-80' to='/heroes'>
        Heroes
      </Link>
      <Link className='self-center hover:opacity-80' to='/about'>
        About
      </Link>
    </nav>
  );
};

export default Nav;
