import React from 'react';
//import 'bootstrap';
import Partners from './partners.js';
import About from './about.js';
import Causes from './partners.js';
import GENRE from './genre.js';
import CHANNELS from './partners.js';
import '../../assets/css/navbar.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <NavLink className="nav-item nav-link nav-style" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item nav-link nav-style" to="/about">
          ABOUT
        </NavLink>
        <NavLink className="nav-item nav-link nav-style" to="/partners">
          PARTNERS
        </NavLink>
        <NavLink className="nav-item nav-link nav-style" to="/causes">
          CAUSES
        </NavLink>
        <NavLink className="nav-item nav-link nav-style" to="/partners">
          GENRE
        </NavLink>
        <NavLink className="nav-item nav-link nav-style" to="/partners">
          CHANNELS
        </NavLink>
      </nav>
    )
}

export default NavBar;
