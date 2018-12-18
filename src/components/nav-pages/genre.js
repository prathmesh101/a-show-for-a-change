import React from 'react';
import 'bootstrap';
import '../../assets/css/genre.css';
import { Link } from 'react-router-dom';

import genreImg from '../../assets/img/cumpleanera-thumbnail.png';

const Genre = () => {
    return (
        <div>
        <div className="genre-head">

            <h3>Always streaming thousands of shorts, documentaries and more.</h3>
        </div>
        <br />

      <div className="container-fluid p-0">
        <div className="row no-gutters popup-gallery">
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
              <img className="img-fluid" src= {genreImg} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Influencers
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
              <img className="img-fluid" src= {genreImg} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg">
              <img className="img-fluid" src= {genreImg} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/4.jpg">
              <img className="img-fluid" src= {genreImg} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg">
              <img className="img-fluid" src= {genreImg} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg">
              <img className="img-fluid" src= {genreImg} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    
        <div className="browser-more-section">
        
      <div className="container text-center">
        
        <button className="btn btn-lg " id="more-btn" href="/">Browse All Titles</button>

      </div>
   
        </div>
        	        

        </div>
    )
}

export default Genre;

