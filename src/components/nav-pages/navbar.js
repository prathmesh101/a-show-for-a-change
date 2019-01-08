import React from 'react';
//import 'bootstrap';
import Home from './home.js';
import About from './about.js';
import '../../assets/css/navbar.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
      </nav>
    )
}

export default NavBar;
