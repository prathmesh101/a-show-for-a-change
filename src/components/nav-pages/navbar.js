import React from 'react';
import 'bootstrap';
import '../../assets/css/navbar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <div className="nav-start navbar-nav mr-auto mt-2">
            <NavLink className="nav-link nav-style" to="/" style={{color:'white', fontFamily:'Ailerons, Regular', paddingRight:'20px', fontSize:'16px'}}>
              SAGE APE
            </NavLink>
            <NavLink data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link nav-style" to="/about">
              ABOUT
            </NavLink>
            <NavLink data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link nav-style" to="/partners">
              PARTNERS
            </NavLink>
            <NavLink data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link nav-style" to="/causes">
              CAUSES
            </NavLink>
            <NavLink data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link nav-style" to="/genre">
              GENRE
            </NavLink>
            <NavLink data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link nav-style" to="/influencer">
              CHANNELS
            </NavLink>
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
