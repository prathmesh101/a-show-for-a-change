import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/home.css';
import Video from '../video';

const Home = () => {
	return (
    <div className="wrapper">
        <div className="one">
					<p id="headerText">See with your eyes, then tip with your heart.</p>
					<p id="headerParagraph">Watch a curated set of socially responsible movies, starting at $4.99/month. See content that will not only move you, but allow you to support independent filmmakers, celebrity influencers and their connected causes. <a href="/about">Want to learn more?</a></p>
					<div className="div-images">
						<img src="https://m.media-amazon.com/images/M/MV5BMjM3MzE2OTEwNF5BMl5BanBnXkFtZTcwNTkyMTg4NA@@._V1_UX182_CR0,0,182,268_AL_.jpg"></img>
						<img src="https://m.media-amazon.com/images/M/MV5BMjA3NjkzNjg2MF5BMl5BanBnXkFtZTgwMDkyMzgzMDI@._V1_UY268_CR0,0,182,268_AL_.jpg"></img>
						<img src="https://m.media-amazon.com/images/M/MV5BMTQ2MjA4MTcwOF5BMl5BanBnXkFtZTgwNTI4OTI1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"></img>
						<img src="https://m.media-amazon.com/images/M/MV5BMjIxMzExMTI4OF5BMl5BanBnXkFtZTgwNzU5MjMxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg"></img>
					</div>
				</div>
        <div className="two">
					<div className="div-signUp">
					<p id="signUpText">SIGN UP TODAY</p>
						<form id="signUpForm" method="POST" action="/sign-up">
							<input type="text" placeholder="email"></input>
							<input type="password" placeholder="password"></input>
							<input type="password" placeholder="confirm password"></input>
							<button id="buttonCreateAccount" className="btn">Create Account</button>
						</form>
					</div>
        </div>
				<div className="three">
					<div className="div-headerBar">
						<div className="div-watchTrailer">
							<p>Watch Trailer</p>
						</div>
						<div className="div-cancellation">
							<p>Cancellation</p>
						</div>
						<div className="div-supportCreators">
							<p>Support Creators</p>
						</div>
						<div className="div-browseVideos">
							<p>Browse Videos</p>
						</div>
					</div>
				</div>
    </div>       
  )
}

export default Home;
