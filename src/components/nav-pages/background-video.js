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
                                <h1>See with your eyes, then give with your heart.</h1>
                                                                
                                <h6>Watch engaging, socially conscious content on a mission-driven platform. Be moved by the power of story, and support independent filmmakers, celebrity influencers and their connected causes.<br /> Starting at just $2.99/month after a free 30-day trial.</h6>
                                 <button className="btn  " id="join-now-back" href="/">Join Today</button>
                             </div> 
                              
                                
                         </div>     
             </div>           

        </div>
    )
}

export default BackVideo;

