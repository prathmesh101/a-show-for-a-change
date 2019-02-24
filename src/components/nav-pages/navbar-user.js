import React from 'react';
import 'bootstrap';
import '../../assets/css/navbar.css';
import { NavLink } from 'react-router-dom';

const NavBarUser = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark transparent mb-5">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon navbar-light"></span>
      </button>
      <div className="collapse navbar-collapse" id="mainMenu">
        <div className="nav-start navbar-nav mr-auto mt-2">
          <NavLink className="nav-link nav-style" to="/" style={{ color: 'white', fontFamily: 'Ailerons, Regular', paddingRight: '20px', fontSize: '16px' }}>
            SAGE APE
            </NavLink>
          <NavLink className="nav-link nav-style" to="/genre" id="navGenres">
            GENRES
              <div className="genresDropdown">
              <a href="#">Documentary</a>
              <a href="#">Drama</a>
              <a href="#">Comedy</a>
            </div>
          </NavLink>
          <NavLink className="nav-link nav-style" to="/causes">
            CAUSES
            </NavLink>
          {/* <NavLink className="nav-link nav-style" to="/influencer">
              CHANNELS
            </NavLink>
            <NavLink className="nav-link nav-style" to="/about">
              ABOUT
            </NavLink>
            <NavLink className="nav-link nav-style" to="/partners">
              PARTNERS
            </NavLink> */}
        </div>

        <div className="nav-end navbar-nav">
          <NavLink className="nav-link nav-style nav-end" to="/sign-in">
            Username
            </NavLink>

        </div>
      </div>
    </nav>
  )
}

export default NavBarUser;
