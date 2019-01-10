import React from 'react';
import 'bootstrap';
import Partners from './partners.js';
import About from './about.js';
import Causes from './partners.js';
import GENRE from './genre.js';
import CHANNELS from './partners.js';
import '../../assets/css/navbar.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-md">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <div className="nav-start">
            <NavLink className="nav-item navbar-brand nav-link nav-style" to="/" style={{color:'white', fontFamily:'Ailerons, Regular', paddingRight:'20px', fontSize:'14px'}}>
              SAGE APE
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
          </div>
          
          <div className="nav-end">
            <NavLink className="nav-item nav-link nav-style nav-end" to="/sign-in">
              SIGN IN
            </NavLink>
            <NavLink className="nav-item nav-link nav-style nav-end" to="/sign-up">
              SIGN UP
            </NavLink>    
          </div>
        </div>
            
      </nav>
    )
}

export default NavBar;
