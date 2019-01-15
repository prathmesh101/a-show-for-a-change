import React from 'react';
import 'bootstrap';
import '../../assets/css/genre.css';
import { Link } from 'react-router-dom';

import genreImg from '../../assets/img/cumpleanera-thumbnail.png';

const Genre = () => {
    return (

<div className="genre-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="genre-section-heading">Content That Matters</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <video width="80%" height="400px" controls preload="metadata" id="vid" poster={genreImg}>
               <source src="http://dl1cz9lqgee4z.cloudfront.net/Cumplaneara.mp4" type="video/mp4" />
              </video>
              <h3 className="mb-3 genre-cont-head">Cumpleañera</h3>
              <p className=" mb-5 genre-cont-para">On her 13th birthday, Gabriela Morales is given a <br />magical heirloom that could change her future.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <video width="80%" height="400px" controls preload="metadata" id="vid" poster={genreImg}>
               <source src="http://dl1cz9lqgee4z.cloudfront.net/Cumplaneara.mp4" type="video/mp4" />
              </video>
              <h3 className="mb-3 genre-cont-head">Physioshark</h3>
              <p className=" mb-5 genre-cont-para">Short documentary about how climate change <br />threatens shark populations worldwide. </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <video width="80%" height="400px" controls preload="metadata" id="vid" poster={genreImg}>
               <source src="http://dl1cz9lqgee4z.cloudfront.net/Cumplaneara.mp4" type="video/mp4" />
              </video>
              <h3 className="mb-3 genre-cont-head">Kharam</h3>
              <p className=" mb-5 genre-cont-para">An eye-opening feature film about an Indian<br /> woman’s resistance to violent oppression.</p>
            </div>
          </div>
        </div>
      </div>
</div>

    )
}

export default Genre;
