import React from 'react';
//import 'bootstrap';
import '../../assets/css/background-intro-video.css';
//import { Link } from 'react-router-dom';

const BackVideo = () => {
    return (
        <div className="back-video-content">
        	<video loop muted autoPlay className="backgrnd-video" style={{objectFit: 'cover', width:'100%', height:'300px'}} src="https://d196vb1g1ujhpl.cloudfront.net/AShowForAChangeCompanyReel.mp4" type="video/mp4">
            </video>
             <div className="overlay">
     			<div className="container">
			        <div className="overlay-content">
                      <h1>Watch. Learn. Give.</h1>
                      <p className="overlay-content-para">Sage Ape offers a growing selection of socially conscious movies and series, <br/> and allows you to donate to the causes and creators closest to your heart.</p>
                      <button className="btn  " id="join-now-back" href="/">WATCH FREE FOR 30 DAYS</button>
                      <p className="overlay-sub-plan">*Three subscription options available,<br /> starting at just $1.99/month.</p>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default BackVideo;
