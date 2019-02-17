import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap';

import { Redirect } from 'react-router';

//import { RootCloseWrapper } from 'react-overlays';

import axios from 'axios';

import '../../assets/css/user-page.css';
import Navbar from './navbar-toggle';







import hero from '../../assets/img/Poster_Emigration@2x.png';
import jared from '../../assets/img/user-influ.png';

import Video1 from '../../assets/img/cump.png';
import Video2 from '../../assets/img/Willow-poster-resized.png';
import Video3 from '../../assets/img/office.png';
import Video4 from '../../assets/img/hurry.png';
import Video5 from '../../assets/img/married.png';
import Video6 from '../../assets/img/munah.png';
import Video7 from '../../assets/img/stress.png';
import Video8 from '../../assets/img/wear.png';





class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

      redirect: false,
      influencerRedirect: false,
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,

    }


    this.show = () => this.setState({ show: true });
      this.show2 = () => this.setState({ show2: true });
        this.show3 = () => this.setState({ show3: true });
          this.show4 = () => this.setState({ show4: true });
          this.show5 = () => this.setState({ show5: true });
          this.show6 = () => this.setState({ show6: true });
          this.show7 = () => this.setState({ show7: true });
          this.show8 = () => this.setState({ show8: true });


        this.hide = () => this.setState({ show: false });
          this.hide2 = () => this.setState({ show2: false });
            this.hide3 = () => this.setState({ show3: false });
              this.hide4 = () => this.setState({ show4: false });
                this.hide5 = () => this.setState({ show5: false });
                  this.hide6 = () => this.setState({ show6: false });
                    this.hide7 = () => this.setState({ show7: false });
                      this.hide8 = () => this.setState({ show8: false });


  }



  handleClick = this.handleClick.bind(this);

  handleInfluClick = this.handleInfluClick.bind(this);




  handleInfluClick(event) {



      this.setState({ influencerRedirect: true });


  }


  handleClick(event) {



      this.setState({ redirect: true });


  }






  render() {

        const { redirect } = this.state;

        if (redirect) {

          return <Redirect to='./video-page'/>;
        }

        const { influencerRedirect } = this.state;

        if (influencerRedirect) {

          return <Redirect to='./influencer'/>;
        }


    return (

      <div className="user-page-main">


      <div className="user-back-img-content">

      <img
      className="backgrnd-img-user"
      style={{objectFit: 'cover', width:'100%'}}
        src={hero}/>

           <div className="overlay-main">
                <div className="container">
                             <div className="overlay-main-user">
                             <div className="user-head-text" style={{fontSize: '1.2em'}}>
                               <h1>Emigration</h1>
                             </div>

                             <div className="influencer-description" style={{fontSize: 'medium', fontWeight:'100'}}>
                               <p>depicts the plight of the Iranian people which leave their <br/>country due to social and political issues. </p>
                             </div>
                             <div>
                               <button className="btn btn-dark btn-outline-success"  style={{marginRight:'10px'}}>Play</button>
                               <button className="btn btn-dark btn-outline-success" data-toggle="modal" data-target="#payment-processing">DONATE</button>
                             </div>
                             </div>
                </div>
           </div>

      </div>







        <section className="more-from mb-5">
          <div className="container">
          <h3  style={{paddingTop:'50px', paddingBottom:'30px'}}  className="head-movie-genre" >Popular</h3>
          <div className="row">

            <figure className="col-lg-3 col-md-6 figure text-center">
              <img src={Video1} alt="Kiana2" className="img-fluid figure-img img-border"  onClick={this.show} />


              <figcaption className="figure-caption">
                Cumpleañera
              </figcaption>

            </figure>
            <figure className="col-lg-3 col-md-6 figure text-center" >
              <img src={Video2} alt="Kiana3" className="img-fluid figure-img img-border" onClick={this.show2} />
              <figcaption className="figure-caption">
                Willow
              </figcaption>

            </figure>
            <figure className="col-lg-3 col-md-6 figure text-center">
              <img src={Video3} alt="Kiana4" className="img-fluid figure-img img-border" onClick={this.show3} />
              <figcaption className="figure-caption">
                Office Party
              </figcaption>

            </figure>
            <figure className="col-lg-3 col-md-6 figure text-center">
              <img src={Video4} alt="Kiana5" className="img-fluid figure-img img-border" onClick={this.show4}/>
              <figcaption className="figure-caption">
                Hurry up and wait
              </figcaption>

            </figure>





          </div>
          </div>
        </section>

        <section className="more-from mb-5" >
        <div className="container">
          <h3 style={{paddingBottom:'30px'}} className="head-movie-genre" >Newly Added</h3>
          <div className="row">
            <figure className="col-lg-3 col-md-6 figure text-center">
              <img src={Video5} alt="Kiana2" className="img-fluid figure-img img-border" onClick={this.show5}/>
              <figcaption className="figure-caption">
                Marriage
              </figcaption>

            </figure>
            <figure className="col-lg-3 col-md-6 figure text-center">
              <img src={Video6} alt="Kiana3" className="img-fluid figure-img img-border" onClick={this.show6} />
              <figcaption className="figure-caption">
                Emunah
              </figcaption>

            </figure>
            <figure className="col-lg-3 col-md-6 figure text-center">
              <img src={Video7} alt="Kiana4" className="img-fluid figure-img img-border" onClick={this.show7} />
              <figcaption className="figure-caption">
                Stressed
  </figcaption>

            </figure>



            <figure className="col-lg-3 col-md-6 figure text-center">
              <img src={Video8} alt="Kiana5" className="img-fluid figure-img img-border" onClick={this.show8}/>
              <figcaption className="figure-caption">
                Wear
              </figcaption>

            </figure>



          </div>
          </div>
        </section>


        <div className="influencer-user-content">
          <div className="container-fluid">


          <div className="influencer-overlay">
               <div className="container">
                            <div className="influencer-overlay-content">
                              <h1>Featured Influencer</h1>
                              <p className="influencer-overlay-para">Influencer content exclusive to the platform, updated weekly.</p>
                              <button className="btn" id="info-but" onClick={(event) => this.handleInfluClick(event)}>VISIT INFLUENCER CHANNEL</button>

                            </div>
               </div>
          </div>

          </div>
        </div>





      </div>








        /*  <h1>Hello</h1>
        <p>Upload Video</p>
        <div onSubmit={this.onFormSubmit}>
          <input type="file" name="file" text="Upload Video" onChange={(e) => this.onChange(e)} />
        </div>
      </div>
*/


    );
  }


}






export default UserPage;
