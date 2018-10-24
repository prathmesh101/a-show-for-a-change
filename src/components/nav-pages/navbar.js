import React from 'react';
import 'bootstrap';
import '../../assets/css/footer.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar-cont">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
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
                            <Link to="/sign-in" className="nav-link">
                                Sign In
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default NavBar;