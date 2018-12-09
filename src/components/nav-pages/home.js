import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/home.css';



import BackgroundImg from './background-video';
import Genre from './genre';
import Features from './features';
import Join from './join-now';
import SignUp from './sign-up';
import Footer from '../footer';

const Home = () => {
	return (
		<div>
			<BackgroundImg />
			<Genre />
			<Features />
			<Join />
			
			<Footer />
		</div>
	)
}

export default Home;

