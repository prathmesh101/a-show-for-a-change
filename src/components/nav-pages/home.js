import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/home.css';
import Video from '../video';

import BackgroundImg from './background-video';

import SignUp from './sign-up';

const Home = () => {
	return (
		<div>
			<BackgroundImg />
			<div className="wrapper">
				<div className="div-video">
					<video controls>
						<source src='http://dl1cz9lqgee4z.cloudfront.net/Cumplaneara.mp4' type='video/mp4' />
					</video>
				</div>
				<div className='div-header'>
					<div className='div-underVideo'>
						<p>Watch 3 For Free</p>
						<span><a href="/" className="linkPrimary">NEXT</a></span>
					</div>
					<div className="one">
						<p id="headerText">Watch. Learn. Give.</p>
						<p id="headerParagraph">Sage Ape offers a growing array of socially and environmentally responsible short films, and allows you to donate to the causes closest to your heart.</p>
						<div className="div-buttonWatchFree">
							<a href="/sign-up"><button id="buttonGreen">WATCH FREE FOR 30 DAYS</button></a>
						</div>
						<div className="div-disclaimer">
							<p>*Only $4.99/month or $49.99/year</p>
						</div>
						<div className="div-infoLinks">
							<a href="/" className="linkPrimary">How It Works</a>
							<span><a href="/about" className="linkPrimary">About Us</a></span>
						</div>
					</div>





					<div className="div-images">
						<img src="https://m.media-amazon.com/images/M/MV5BMjM3MzE2OTEwNF5BMl5BanBnXkFtZTcwNTkyMTg4NA@@._V1_UX182_CR0,0,182,268_AL_.jpg"></img>
						<img src="https://m.media-amazon.com/images/M/MV5BMjA3NjkzNjg2MF5BMl5BanBnXkFtZTgwMDkyMzgzMDI@._V1_UY268_CR0,0,182,268_AL_.jpg"></img>
						<img src="https://m.media-amazon.com/images/M/MV5BMTQ2MjA4MTcwOF5BMl5BanBnXkFtZTgwNTI4OTI1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"></img>
						{/* <img src="https://m.media-amazon.com/images/M/MV5BMjIxMzExMTI4OF5BMl5BanBnXkFtZTgwNzU5MjMxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg"></img> */}
					</div>
				</div>
				<div className="two">
					<SignUp />
					{/* <div className="div-signUp">
					<p id="signUpText">SIGN UP TODAY</p>
					<form id="signUpForm" method="POST" action="/sign-up">
						<input type="text" placeholder="email"></input>
						<input type="password" placeholder="password"></input>
						<input type="password" placeholder="confirm password"></input>
						<button id="buttonCreateAccount" className="btn">Create Account</button>
					</form>
				</div> */}
				</div>
			</div>
		</div>
	)
}

export default Home;
