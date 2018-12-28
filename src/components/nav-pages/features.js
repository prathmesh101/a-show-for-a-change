import React from 'react';
import '../../assets/css/features.css';
import { Link } from 'react-router-dom';
import Actor from '../../assets/img/Actor.png';
import Charity from '../../assets/img/Charity.png';
import Video from '../../assets/img/Video.png';


const Features = () => {
    return (
        <div className="features-section">



              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Don’t just watch, take action!</h2>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">

                  <div className="col-lg-4 col-md-6 text-center">
                    <div className="service-box mt-5 mx-auto">
                      <img src={Actor} alt="actor" />
                      <h3 className="mb-3 features-cont-head">Influencers</h3>
                      <p className=" mb-0 features-cont-para">Exclusive content from people <br/> you care about.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <div className="service-box mt-5 mx-auto">
                      <img src={Charity} alt="charity" />
                      <h3 className="mb-3 features-cont-head">Partners</h3>
                      <p className=" mb-0 features-cont-para">Get involved with the causes <br/>closest to your heart.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <div className="service-box mt-5 mx-auto">
                      <img src={Video} alt="video" />
                      <h3 className="mb-3 features-cont-head">Filmmakers</h3>
                      <p className=" mb-0 features-cont-para">Like the content? Support the <br/>filmmakers behind it.</p>
                    </div>
                  </div>
                </div>
              </div>


        </div>

    )
}

export default Features;
