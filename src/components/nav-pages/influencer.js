import React from 'react';
import kiana_hero from '../../assets/img/influencer/Kiana_HeroImage@2x.png';
import kiana_pitch from '../../assets/img/influencer/Kiana_Screenshot.png';
import kiana_Video1 from '../../assets/img/influencer/Kiana_Video1@2x.png';
import kiana_Video2 from '../../assets/img/influencer/Kiana_Video2@2x.png';
import kiana_Video3 from '../../assets/img/influencer/Kiana_Video3@2x.png';
import kiana_Video4 from '../../assets/img/influencer/Kiana_Video4@2x.png';
import kiana_Video5 from '../../assets/img/influencer/Kiana_Video5@2x.png';
import jared_hero from '../../assets/img/influencer/Jared_HeroImage@2x.png';
import jared_pitch from '../../assets/img/influencer/Jared_Screenshot.png';
import jared_Video1 from '../../assets/img/influencer/Jared_Video1@2x.png';
import jared_Video2 from '../../assets/img/influencer/Jared_Video2@2x.png';
import jared_Video3 from '../../assets/img/influencer/Jared_Video3@2x.png';
import jared_Video4 from '../../assets/img/influencer/Jared_Video4@2x.png';
import jared_Video5 from '../../assets/img/influencer/Jared_Video5@2x.png';
import StripeCheckout from 'react-stripe-checkout';
import {Elements} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm.js';
import CVLogo from '../../assets/img/partners/logos/CV-logo.png';


class Influencer extends React.Component{
	
	onToken = (token) => {
		
		fetch('https://dev.sageape.com/api_php/processpayment.php', {
			method: "POST", 
			body: JSON.stringify(token)
		}).then(response => {
			response.json().then(data => {
				alert(`We are in business, ${data.email}`);
			});
		});
	}

	render () {

		return (
			<div className="container">
				<section className="influencer mb-5" style={{marginTop: '100px'}}>
					<div className="influencer-poster">
					  <div className="row">
					  	<div className="h4" style={{color: 'white'}}><bolder>Influencer:</bolder> Kiana Madani</div>
					  </div>
						<div className="row">
							<div className="col-lg-6 p-0" style={{marginTop: '70px'}}>
								<img className="img-fluid" src={kiana_hero} />
							</div>
							<div className="col-lg-6 m-0 p-0">
							  <div class="position-static"><span>In partnership with Covenant House</span></div>
								<video width="80%" height="400px" controls preload="metadata" id="vid1" poster={kiana_pitch}>
								   <source src="https://d2d9lc244tytnt.cloudfront.net/KianaMadaniIRC.mp4" type="video/mp4" />
               					</video>
							</div>
						</div>
					</div>
					<div className="influencer-name" style={{fontSize: '1.2em'}}>
						Kiana Madani
					</div>
					<div className="influencer-causes" style={{fontSize: 'smaller'}}>
						Causes: Equal Rights •  Animal Welfare
					</div>
					<div className="influencer-description" style={{fontSize: 'small', color: 'white'}}>
						<p>Iranian-American actress Kiana Madani has been acting, modeling and performing for nearly ten years. Born and raised in San Jose, California, Kiana partook in theatre productions locally and participated in acting classes in San Francisco. She has worked on multiple TV pilots, national commercials and feature films amongst seasoned actors. Currently, you can watch her in the political drama THE PIRATES OF SOMALIA opposite Al Pacino, Evan Peters, Barkhad Abdi, and Melanie Griffith on Netflix.</p>
					</div>
					<div>
						<button className="btn btn-dark btn-outline-success">SUBSCRIBE TO CHANNEL</button>
					{/*    <button className="btn btn-dark btn-outline-success" data-toggle="modal" data-target="#payment-processing">DONATE</button> */}
						<StripeCheckout 					name="A Show For A Change"
															description="Donations for Kiana cause"
									      					email="info@sageape.com"
									      					shippingAddress
									      					label="Give A Hand"
									      					amount={1000}
									      					token={this.onToken} 
									      					stripeKey="pk_test_QnqxjgpNaY5eYWI0mhVwVvZA" 
									      />
						</div>
				</section>
			
				<section className="more-from mb-5">
					<h3>More from Kiana</h3>
					<div className="row">
						<figure className="col-lg-3 col-md-6 figure text-center">
							<img src={kiana_Video2} alt="Kiana2" className="img-fluid figure-img" />
							<figcaption className="figure-caption">
								Video Title
							</figcaption>
							
						</figure>
						<figure className="col-lg-3 col-md-6 figure text-center">
							<img src={kiana_Video3} alt="Kiana3" className="img-fluid figure-img" />
							<figcaption className="figure-caption">
								Video Title
							</figcaption>
							
						</figure>
						<figure className="col-lg-3 col-md-6 figure text-center">
							<img src={kiana_Video4} alt="Kiana4" className="img-fluid figure-img" />
							<figcaption className="figure-caption">
								Video Title
							</figcaption>
							
						</figure>
						<figure className="col-lg-3 col-md-6 figure text-center">
							<img src={kiana_Video5} alt="Kiana5" className="img-fluid figure-img" />
							<figcaption className="figure-caption">
								Video Title
							</figcaption>
							
						</figure>
					</div>
				</section>

				<section className="influencer mb-5">
					<div className="influencer-poster">
					  <div className="row">
					  	<div className="h4" style={{color: 'white'}}><bolder>Influencer:</bolder> Jared Milrad</div>
					  </div>
						<div className="row">
							<div className="col-lg-6 p-0" style={{marginTop: '70px'}}>
								<img className="img-fluid" src={jared_hero} />
							</div>
							<div className="col-lg-6 m-0 p-0">
								<video width="80%" height="400px" controls preload="metadata" id="vid1" poster={jared_pitch}>
								   <source src="https://dhcrjikk6i91q.cloudfront.net/JaredMilradCovenantHouse.mp4" type="video/mp4" />
               					</video>
							</div>
						</div>
					</div>
					<div className="influencer-name" style={{fontSize: '1.2em'}}>
						Jared Milrad
					</div>
					<div className="influencer-causes" style={{fontSize: 'smaller'}}>
						Causes: Equal Rights •  Animal Welfare
					</div>
					<div className="influencer-description" style={{fontSize: 'small', color: 'white'}}>
						<p>A filmmaker and entrepreneur, Jared Milrad worked for President Barack Obama and founded a nationally recognized non-profit organization. The founder of A Show For A Change, his recent film credits include Cumpleañera (writer/director), Marriage (writer/director), 1.20.17 (writer/director), Officer Party (writer/actor), and Hurry Up and Wait (writer/actor).</p>
					</div>
					<div>
						<button className="btn btn-dark btn-outline-success">SUBSCRIBE TO CHANNEL</button>
					{/*	<button className="btn btn-dark btn-outline-success" data-toggle="modal" data-target="#payment-processing">DONATE</button> */}
						<StripeCheckout 					name="A Show For A Change"
															description="Donations for Jared cause"
									      					email="info@sageape.com"
									      					shippingAddress
									      					label="Give A Hand"
									      					amount={1000}
									      					token={this.onToken} 
									      					stripeKey="pk_test_QnqxjgpNaY5eYWI0mhVwVvZA" 
									      />
					</div>
				</section>
			
				<section className="more-from mb-5">
					<h3>More from Jared</h3>
					<div className="row">
						<figure className="col-lg-3 col-md-6 figure text-center">
							<img src={jared_Video2} alt="Jared2" className="img-fluid figure-img" />
							<figcaption className="figure-caption">
								Video Title
							</figcaption>
							
						</figure>
						<figure className="col-lg-3 col-md-6 figure text-center">
							<img src={jared_Video3} alt="Jared3" className="img-fluid figure-img" />
							<figcaption className="figure-caption">
								Video Title
							</figcaption>
							
						</figure>
						<figure className="col-lg-3 col-md-6 figure text-center">
							<img src={jared_Video4} alt="Jared4" className="img-fluid figure-img" />
							<figcaption className="figure-caption">
								Video Title
							</figcaption>
							
						</figure>
						<figure className="col-lg-3 col-md-6 figure text-center">
							<img src={jared_Video5} alt="Jared5" className="img-fluid figure-img" />
							<figcaption className="figure-caption">
								Video Title
							</figcaption>
							
						</figure>
					</div>
				</section>
			</div>

		)

	}
}
// const Influencer = () => {
// 	return (
// 		<div className="container">
// 			<div className="modal fade" id="payment-processing">
// 				<div className="modal-dialog">
// 					<div className="modal-content">
// 						<div className="modal-header">
// 							<h5 className="modal-title">Donation</h5>
// 							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
// 							     <span aria-hidden="true">&times;</span>
// 							</button>
// 						</div>
// 						<div className="modal-body">
// 							<p>Here goes stripe payment</p>
// 							<form action="/charge" method="post" id="payment-form">
//   								<div className="form-row">
// 								    <label for="card-element">
// 								      Credit or debit card
// 								    </label>
// 								    <div id="card-element">
// 								     <script
// 									    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
// 									    data-key="pk_test_TYooMQauvdEDq54NiTphI7jx"
// 									    data-amount="999"
// 									    data-name="Stripe.com"
// 									    data-description="Example charge"
// 									    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
// 									    data-locale="auto"
// 									    data-zip-code="true">
// 									  </script>
// 								    </div>
// 							    	{/*  Used to display form errors.   */}
// 							    <div id="card-errors" role="alert"></div>
// 							  </div>

// 							  <button>Submit Payment</button>
// 							</form>
// 						</div>
// 					</div>{/* modal-content */}
// 				</div>{/* modal-dialog */}
// 			</div>{/* modal */}
// 			<section className="influencer mb-5" style={{marginTop: '100px'}}>
// 				<div className="influencer-poster">
// 					<div className="row">
// 						<div className="col-lg-6 m-0 p-0">
// 							<img className="img-fluid" src={kiana_hero} />
// 						</div>
// 						<div className="col-lg-6 m-0 p-0">
// 							<img className="img-fluid" src={kiana_Video1} />
// 						</div>
// 					</div>
// 				</div>
// 				<div className="influencer-name" style={{fontSize: '1.2em'}}>
// 					Kiana Madani
// 				</div>
// 				<div className="influencer-causes" style={{fontSize: 'smaller'}}>
// 					Causes: Equal Rights •  Animal Welfare
// 				</div>
// 				<div className="influencer-description" style={{fontSize: 'small', color: 'white'}}>
// 					<p>Iranian-American actress Kiana Madani has been acting, modeling
// 						for nearly ten years.<br />
// 						Born and raised in San Jose, California, Kiana
// 						partook in <span style={{textDecoration: 'underline'}}>Read more</span>  
// 					</p>
// 				</div>
// 				<div>
// 					<button className="btn btn-dark btn-outline-success">SUBSCRIBE TO CHANNEL</button>
// 					<button className="btn btn-dark btn-outline-success" data-toggle="modal" data-target="#payment-processing">DONATE</button>
// 				</div>
// 			</section>
		
// 			<section className="more-from mb-5">
// 				<h3>More from Kiana</h3>
// 				<div className="row">
// 					<figure className="col-lg-3 col-md-6 figure text-center">
// 						<img src={kiana_Video2} alt="Kiana2" className="img-fluid figure-img" />
// 						<figcaption className="figure-caption">
// 							Video Title
// 						</figcaption>
						
// 					</figure>
// 					<figure className="col-lg-3 col-md-6 figure text-center">
// 						<img src={kiana_Video3} alt="Kiana3" className="img-fluid figure-img" />
// 						<figcaption className="figure-caption">
// 							Video Title
// 						</figcaption>
						
// 					</figure>
// 					<figure className="col-lg-3 col-md-6 figure text-center">
// 						<img src={kiana_Video4} alt="Kiana4" className="img-fluid figure-img" />
// 						<figcaption className="figure-caption">
// 							Video Title
// 						</figcaption>
						
// 					</figure>
// 					<figure className="col-lg-3 col-md-6 figure text-center">
// 						<img src={kiana_Video5} alt="Kiana5" className="img-fluid figure-img" />
// 						<figcaption className="figure-caption">
// 							Video Title
// 						</figcaption>
						
// 					</figure>
// 				</div>
// 			</section>

// 			<section className="influencer mb-5">
// 				<div className="influencer-poster">
// 					<div className="row">
// 						<div className="col-lg-6 m-0 p-0">
// 							<img className="img-fluid" src={jared_hero} />
// 						</div>
// 						<div className="col-lg-6 m-0 p-0">
// 							<img className="img-fluid" src={jared_Video1} />
// 						</div>
// 					</div>
// 				</div>
// 				<div className="influencer-name" style={{fontSize: '1.2em'}}>
// 					Jared Milrad
// 				</div>
// 				<div className="influencer-causes" style={{fontSize: 'smaller'}}>
// 					Causes: Equal Rights •  Animal Welfare
// 				</div>
// 				<div className="influencer-description" style={{fontSize: 'small', color: 'white'}}>
// 					<p>Seasoned entrepreneurial leader adept at launching innovative projects and achieving<br />tangible results. An accomplished filmmaker, advocate, and <span style={{textDecoration: 'underline'}}>Read more</span> 
// 					</p>
// 				</div>
// 				<div>
// 					<button className="btn btn-dark btn-outline-success">SUBSCRIBE TO CHANNEL</button>
// 					<button className="btn btn-dark btn-outline-success" data-toggle="modal" data-target="#payment-processing">DONATE</button>
// 				</div>
// 			</section>
		
// 			<section className="more-from mb-5">
// 				<h3>More from Jared</h3>
// 				<div className="row">
// 					<figure className="col-lg-3 col-md-6 figure text-center">
// 						<img src={jared_Video2} alt="Jared2" className="img-fluid figure-img" />
// 						<figcaption className="figure-caption">
// 							Video Title
// 						</figcaption>
						
// 					</figure>
// 					<figure className="col-lg-3 col-md-6 figure text-center">
// 						<img src={jared_Video3} alt="Jared3" className="img-fluid figure-img" />
// 						<figcaption className="figure-caption">
// 							Video Title
// 						</figcaption>
						
// 					</figure>
// 					<figure className="col-lg-3 col-md-6 figure text-center">
// 						<img src={jared_Video4} alt="Jared4" className="img-fluid figure-img" />
// 						<figcaption className="figure-caption">
// 							Video Title
// 						</figcaption>
						
// 					</figure>
// 					<figure className="col-lg-3 col-md-6 figure text-center">
// 						<img src={jared_Video5} alt="Jared5" className="img-fluid figure-img" />
// 						<figcaption className="figure-caption">
// 							Video Title
// 						</figcaption>
						
// 					</figure>
// 				</div>
// 			</section>
// 		</div>

// 	)
// }

export default Influencer;
