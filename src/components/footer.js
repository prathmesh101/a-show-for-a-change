import React from 'react';
import '../assets/css/footer.css';
import Twitter from '../assets/img/twitter.png';
import Facebook from '../assets/img/facebook.png';
import Insta from '../assets/img/insta.png';

const Footer = () => {
    return (
        <div className="footer-cont">
          <div className="pull-left footer-left">
            <h3>SAGE APE</h3>
            <p>&copy; {(new Date().getFullYear())} A Show For A Change, Inc. All rights reserved.</p>
          </div>
          <div className="pull-right footer-right">

            <div className="footer-connect"><p>Connect with us</p></div>
            <div className="footer-twitter">

                <img src={ Twitter } alt="twitter" />

            </div>
            <div className="footer-facebook">
              <img src={ Facebook } alt="facebook" />
            </div>
            <div className="footer-insta">
                <img src={ Insta } alt="insta" />
            </div>


          </div>

        </div>
    )
}

export default Footer;
