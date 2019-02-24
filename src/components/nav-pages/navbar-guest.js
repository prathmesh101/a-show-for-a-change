import React from 'react';
import 'bootstrap';
import '../../assets/css/navbar.css';
import { NavLink } from 'react-router-dom';
import websiteLogo from '../../assets/img/Movikarma_White.png';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-md mb-5">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <div className="nav-start navbar-nav mr-auto mt-2">
            <NavLink style={{padding: ".1em", marginRight: "1.5em"}} className="nav-link nav-style" to="/">
              <img className="img-fluid" src={websiteLogo} />
            </NavLink>
            <NavLink className="nav-link nav-style" to="/about">
              ABOUT
            </NavLink>
            <NavLink className="nav-link nav-style" to="/partners">
              PARTNERS
            </NavLink>
            <NavLink className="nav-link nav-style" to="/influencer">
              CHANNELS
            </NavLink>
            {/* <NavLink className="nav-link nav-style" to="/causes">
              CAUSES
            </NavLink>
            <NavLink className="nav-link nav-style" to="/genre">
              GENRE
            </NavLink>*/}
          </div>
          
          <div className="nav-end navbar-nav">
            <NavLink className="nav-link nav-style nav-end" to="/sign-in">
              SIGN IN
            </NavLink>
            <NavLink className="nav-link nav-style nav-end" to="/sign-up">
              SIGN UP
            </NavLink>    
          </div>
        </div>     
      </nav>
    )
}

export default NavBar;
