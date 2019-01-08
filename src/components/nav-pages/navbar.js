import React from 'react';
import 'bootstrap';
import '../../assets/css/navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className="navbar-cont">
          <nav className="head-navbar navbar navbar-expand-lg navbar-fixed-top">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link to="/" className="nav-link navbar-brand left" style={{color:'white', fontFamily:'Ailerons, Regular', paddingRight:'20px', fontSize:'14px'}}>
                          SAGE APE
                          </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/" className="nav-link nav-style left">
                          HOME
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/about" className="nav-link nav-style" >
                        ABOUT
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/film-festival" className="nav-link nav-style">
                          PARTNERS
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/projects" className="nav-link nav-style">
                          CAUSES
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/partners" className="nav-link nav-style">
                        GENRE
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/partners" className="nav-link nav-style">
                        CHANNELS
                      </Link>
                  </li>
              </ul>
              <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 " id="navbarNav">
                  <ul className="navbar-nav ml-auto" >

                      <li className="nav-item">
                          <Link to="/sign-in" className="nav-link nav-style">
                              SIGN IN
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/sign-up" className="nav-link nav-style">
                              SIGN UP
                          </Link>
                      </li>
                  </ul>
              </div>
          </nav>
      </div >
    )
}

export default NavBar;
