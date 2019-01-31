import React from 'react';
import '../assets/css/header.css';

import Navbar from './nav-pages/navbar-toggle.js';

// const Header = () => {
//     return (
//         <div className="header-cont">
//             <Navbar isLoggedIn={false}/>
//         </div>
//     )
// }

class Header extends React.Component 
{
	componentDidMount (props) {
		console.log("here we are")
		const  logged_header  = props.loggedIn
		//loggedIn = {this.isLoggedIn}
		console.log("logged " + logged_header)
	}

	render() {
		return (
			<div className="header-cont">
            	<Navbar isLoggedIn={true}/>
        	</div>
		);
	}
}

export default Header;
