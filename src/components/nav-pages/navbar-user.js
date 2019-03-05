import React from 'react';
import 'bootstrap';
import '../../assets/css/navbar.css';
import { NavLink, Link } from 'react-router-dom';
import websiteLogo from '../../assets/img/Movikarma_White.png';

const NavBarUser = () => {
  return (
    <nav className="navbar navbar-expand-md mb-5">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mainMenu"
        aria-controls="mainMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon navbar-light" />
      </button>
      <div className="collapse navbar-collapse" id="mainMenu">
        <div className="nav-start navbar-nav mr-auto mt-2">
          <NavLink
            style={{ padding: '.1em', marginRight: '1.5em' }}
            className="nav-link nav-style"
            to="/"
          >
            <img className="img-fluid" src={websiteLogo} />
          </NavLink>
          <NavLink className="nav-link nav-style" to="/genre" id="navGenres">
            GENRES
            <div className="genresDropdown">
              {/* 
              dont use a tags since they break a tags can't be nested
              <a href="#">Documentary</a>
              <a href="#">Drama</a>
              <a href="#">Comedy</a>
              */}
              <p to="#">Documentary</p>
              <p to="#">Drama</p>
              <p to="#">Comedy</p>
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
            PROFILE
          </NavLink>
          <NavLink className="nav-link nav-style nav-end" to="/sign-up">
            SIGN OUT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarUser;
