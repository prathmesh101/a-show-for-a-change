import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import '../../assets/css/video-page.css';


import Video1 from '../../assets/img/cump.png';
import Video2 from '../../assets/img/Willow-poster-resized.png';
import Video3 from '../../assets/img/office.png';
import Video4 from '../../assets/img/hurry.png';
import Video5 from '../../assets/img/married.png';
import Video6 from '../../assets/img/munah.png';
import Video7 from '../../assets/img/stress.png';
import Video8 from '../../assets/img/wear.png';

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {

    var settings = {
      slidesToShow: 4, slidesToScroll: 4,
    };


    return (

      <div style={{color: 'white', paddingTop:'67px', paddingBottom:'30px'}}>
          <div className="mx-auto">
            <video width="100%" height="500px" controls="play" preload="metadata" id="vid">
             <source src="http://dl1cz9lqgee4z.cloudfront.net/Cumplaneara.mp4" type="video/mp4" />
            </video>

          </div>


          <div style={{padding:'0 50px', }}>
            <div style={{padding:'10px 0', color:'white' }}>
              Recommended
            </div>
              <Slider {...settings}>
             <div>
               <img src= {Video1} width="400" height="200" />
             </div>
             <div>
               <img src={Video2} width="400" height="200" />
             </div>
             <div>
               <img src={Video3} width="400" height="200" />
             </div>
             <div>
               <img src={Video4} width="400" height="200" />
             </div>
             <div>
               <img src={Video5} width="400" height="200" />
             </div>
             <div>
               <img src={Video6} width="400" height="200" />
             </div>
             <div>
               <img src={Video7} width="400" height="200" />
             </div>
             <div>
               <img src={Video8} width="400" height="200" />
             </div>
           </Slider>
          </div>
       </div>

    );
  }
}

export default VideoPage;
