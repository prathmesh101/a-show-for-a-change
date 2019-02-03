import React from 'react';
import '../assets/css/footer.css';
import Twitter from '../assets/img/twitter.png';
import Facebook from '../assets/img/facebook.png';
import Insta from '../assets/img/insta.png';
import websiteLogo from '../assets/img/Movikarma_white.svg';

const Footer = () => {
    return (
        <div className="footer-cont">
          <div className="pull-left footer-left p-3">
            <img className="img-fluid" src={websiteLogo} />
            <p>&copy; {(new Date().getFullYear())} A Show For A Change, Inc. All rights reserved.</p>
          </div>
          <div className="pull-right footer-right">

            <div className="footer-connect"><p>Connect with us</p></div>
            <div className="footer-twitter">

                <img className="img-fluid"  src={ Twitter } alt="twitter" />

            </div>
            <div className="footer-facebook">
              <img className="img-fluid" src={ Facebook } alt="facebook" />
            </div>
            <div className="footer-insta">
                <img className="img-fluid" src={ Insta } alt="insta" />
            </div>


          </div>

        </div>
    )
}

export default Footer;
