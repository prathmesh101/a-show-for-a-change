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
		const { logged } = this.props.loggedIn
		//loggedIn = {this.isLoggedIn}
		console.log("logged " + logged)
	}

	render() {
		return (
			<div className="header-cont">
            	<Navbar isLoggedIn={logged}/>
        	</div>
		);
	}
}

export default Header;
