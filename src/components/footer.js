import React from 'react';
import '../assets/css/footer.css';
import Twitter from '../assets/img/twitter.png';
import Facebook from '../assets/img/facebook.png';
import Insta from '../assets/img/insta.png';
import websiteLogo from '../assets/img/Movikarma_white.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="ml-3">
        <div className="row justify-content-between footer-cont">
          <NavLink style={{padding: ".1em", marginRight: "1.5em"}} className="nav-link nav-style" to="/">
            <img className="img-fluid" src={websiteLogo} />
          </NavLink>
          <div className="col-4 pull-right footer-right">
            <div className="footer-connect"><p>Connect with us</p></div>
            <div className="footer-twitter">
              <a target="_blank" alt="Twitter" href="https://mobile.twitter.com/movikarma"><img className="img-fluid" src={Twitter} alt="twitter" /></a>
            </div>
            <div className="footer-facebook">
              <a target="_blank" alt="Facebook" href="https://m.facebook.com/movikarma"><img className="img-fluid" src={ Facebook } alt="facebook" /></a>
            </div>
            <div className="footer-insta">
              <a target="_blank" alt="Instagram" href="https://www.instagram.com/movikarma/"><img className="img-fluid" src={ Insta } alt="insta" /></a>
            </div>
          </div>
        </div>
        <div className="row text-white copy-right">
          <p>&copy; {(new Date().getFullYear())} A Show For A Change, Inc. All rights reserved.</p>
        </div>
      </div>
    )
}

export default Footer;
