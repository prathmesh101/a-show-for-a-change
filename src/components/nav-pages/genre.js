import React from 'react';
//import 'bootstrap';
import '../../assets/css/genre.css';
//import { Link } from 'react-router-dom';

import cumpImg from '../../assets/img/Poster_Cumpleanera@2x.png';
import willowImg from '../../assets/img/Willow-poster.jpg';
import classmateImg from '../../assets/img/Poster_classmate.jpg';


const Genre = () => {
    return (

<div className="genre-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="genre-section-heading">Stories With Impact</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <video width="80%" height="400px" controls preload="metadata" id="vid" poster={cumpImg}>
               <source src="http://dl1cz9lqgee4z.cloudfront.net/Cumplaneara.mp4" type="video/mp4" />
              </video>
              <h3 className="mb-3 genre-cont-head">Cumpleañera</h3>
              <p className=" mb-5 genre-cont-para">On her 13th birthday, Gabriela Morales is given a <br />magical heirloom that could change her future.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <video width="80%" height="400px" controls preload="metadata" id="vid2" poster={willowImg}>
               <source src="http://d196vb1g1ujhpl.cloudfront.net/Willow7WeeksInAquariusPromo.mp4" type="video/mp4" />
              </video>
              <h3 className="mb-3 genre-cont-head">Willow: 7 Weeks in Aquarius</h3>
              <p className=" mb-5 genre-cont-para">A provocative look inside the challenges, along with the politics
                       of animal disaster rescue, and the glorious mind who spent<br /> nearly two months rescuing pets and farm
                       animals in the face of one of <br />Canada's worst natural disaster.  </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <video width="80%" height="400px" controls preload="metadata" id="vid3" poster={classmateImg}>
               <source src="https://d196vb1g1ujhpl.cloudfront.net/ClassmateTrailer.mp4" type="video/mp4" />
              </video>
              <h3 className="mb-3 genre-cont-head">Classmate</h3>
              <p className=" mb-5 genre-cont-para">A man and a woman meet on a bus.<br />She's an engineer and married. He's homeless.</p>
            </div>
          </div>
        </div>
      </div>
</div>

    )
}

export default Genre;
