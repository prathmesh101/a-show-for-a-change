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
	componentDidMount () {
		console.log("here we are")
		//const { logged } = this.props.loggedIn.logged
		console.log("logged")
	}

	render() {
		return (
			<div className="header-cont">
            	<Navbar isLoggedIn={this.props.loggedIn}/>
        	</div>
		);
	}
}

export default Header;
