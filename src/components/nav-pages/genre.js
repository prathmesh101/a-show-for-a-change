import React from 'react';
//import 'bootstrap';
import '../../assets/css/genre.css';
//import { Link } from 'react-router-dom';

import cumpImg from '../../assets/img/Poster_Cumpleanera@2x.png';
import emigrantImg from '../../assets/img/Poster_Emigration@2x.png';
import stressedImg from '../../assets/img/Poster_Stressed@2x.png';


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
              <video width="80%" height="400px" controls preload="metadata" id="vid" poster={cumpImg}>
               <source src="http://dl1cz9lqgee4z.cloudfront.net/Cumplaneara.mp4" type="video/mp4" />
              </video>
              <h3 className="mb-3 genre-cont-head">Cumpleañera</h3>
              <p className=" mb-5 genre-cont-para">On her 13th birthday, Gabriela Morales is given a <br />magical heirloom that could change her future.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <video width="80%" height="400px" controls preload="metadata" id="vid2" poster={emigrantImg}>
               <source src="http://djn1t69fp4pr0.cloudfront.net/weddingtrailer.mp4" type="video/mp4" />
              </video>
              <h3 className="mb-3 genre-cont-head">Marriage</h3>
              <p className=" mb-5 genre-cont-para">Emigration and all its complications. </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <video width="80%" height="400px" controls preload="metadata" id="vid3" poster={stressedImg}>
               <source src="https://d2gm4ehypw4n5s.cloudfront.net/hurry.mp4" type="video/mp4" />
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
