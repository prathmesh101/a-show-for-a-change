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
	render() {
		return (
			<div className="header-cont">
            	<Navbar isLoggedIn={false}/>
        	</div>
		);
	}
}

export default Header;
