import React from 'react';
import 'bootstrap';
import '../../assets/css/navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar-cont">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand" style={{ color: 'white' }}>
                    Sage Ape
                            </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" >
                                About
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/film-festival" className="nav-link">
                                Film Festival
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">
                                Projects
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/partners" className="nav-link">
                                Partners
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-in" className="nav-link nav-style">
                                Sign In
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-link nav-style">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;