import React from 'react';
import '../../assets/css/background-intro-video.css';
import { Link } from 'react-router-dom';

const BackVideo = () => {
    return (
        <div className="back-video-content">

        	<video loop muted autoPlay 
                            className="backgrnd-video"
                            style={{objectFit: 'cover', width:'100%', height:'400px'}}                        
                            src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                            type="video/mp4"/>
             
             <div className="overlay">
             			<div className="container">	
             				

             				<div className="overlay-content">	
                                <h2>Watch. Learn. Give.</h2>
                                
                                
                                <p>Sage Age offers a growing array of socially and environmentally responsible short films, and allows you to donate to the causes closest to your heart.</p>
                             </div> 
                              
                                
                         </div>     
             </div>           

        </div>
    )
}

export default BackVideo;

