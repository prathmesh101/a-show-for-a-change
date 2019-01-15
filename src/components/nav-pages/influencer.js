import React from 'react';
import kiana_hero from '../../assets/img/influencer/Kiana_HeroImage@2x.png';
import kiana_Video1 from '../../assets/img/influencer/Kiana_Video1@2x.png';
import kiana_Video2 from '../../assets/img/influencer/Kiana_Video2@2x.png';
import kiana_Video3 from '../../assets/img/influencer/Kiana_Video3@2x.png';
import kiana_Video4 from '../../assets/img/influencer/Kiana_Video4@2x.png';
import kiana_Video5 from '../../assets/img/influencer/Kiana_Video5@2x.png';
import jared_hero from '../../assets/img/influencer/Jared_HeroImage@2x.png';
import jared_Video1 from '../../assets/img/influencer/Jared_Video1@2x.png';
import jared_Video2 from '../../assets/img/influencer/Jared_Video2@2x.png';
import jared_Video3 from '../../assets/img/influencer/Jared_Video3@2x.png';
import jared_Video4 from '../../assets/img/influencer/Jared_Video4@2x.png';
import jared_Video5 from '../../assets/img/influencer/Jared_Video5@2x.png';

const Influencer = () => {
	return (
		<div className="container">
			<section className="influencer mb-5">
				<div className="influencer-poster">
					<div className="row">
						<div className="col-lg-6 m-0 p-0">
							<img className="img-fluid" src={kiana_hero} />
						</div>
						<div className="col-lg-6 m-0 p-0">
							<img className="img-fluid" src={kiana_Video1} />
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
					<p>Iranian-American actress Kiana Madani has been acting, modeling
						for nearly ten years.<br />
						Born and raised in San Jose, California, Kiana
						partook in <span style={{textDecoration: 'underline'}}>Read more</span>  
					</p>
				</div>
				<div>
					<button className="btn btn-dark btn-outline-success">SUBSCRIBE TO CHANNEL</button>
					<button className="btn btn-dark btn-outline-success">DONATE</button>
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
						<div className="col-lg-6 m-0 p-0">
							<img className="img-fluid" src={jared_hero} />
						</div>
						<div className="col-lg-6 m-0 p-0">
							<img className="img-fluid" src={jared_Video1} />
						</div>
					</div>
				</div>
				<div className="influencer-name" style={{fontSize: '1.2em'}}>
					Jared Milrad
				</div>
				<div className="influencer-causes" style={{fontSize: 'smaller'}}>
					Causes: Equal Rights •  Animal Welfare
				</div>
				<div className="influencer-description" style={{fontSize: 'small'}}>
					<p>Seasoned entrepreneurial leader adept at launching innovative projects and achieving<br />tangible results. An accomplished filmmaker, advocate, and <span style={{textDecoration: 'underline'}}>Read more</span> 
					</p>
				</div>
				<div>
					<button className="btn btn-dark btn-outline-success">SUBSCRIBE TO CHANNEL</button>
					<button className="btn btn-dark btn-outline-success">DONATE</button>
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

export default Influencer;
