import React from 'react';
import NavbarGuestPart from './navbar-guest.js';
import NavbarUserPart from './navbar-user.js';


function NavbarUser(state) {
  return <NavbarUserPart />;
}

function NavbarGuest(state) {
  return <NavbarGuestPart />;
}

// const NavBarToggle = state => {


//   //const isLoggedIn = state.isLoggedIn;
//   const isLoggedIn = this.props.isLoggedIn;

//   if (isLoggedIn) {
//     return <NavbarUser />;
//   }
//   return <NavbarGuest />;
// }

class NavBarToggle extends React.Component {

	componentDidMount () {
		const  { isLoggedIn }  = this.props.isLoggedIn;

		if (isLoggedIn) {
			const prog = "NavbarUser";
		} else {
			const prog = "NavbarGuest";
		}
	}



	render () {
		return (

		 //const isLoggedIn = state.isLoggedIn;
		 
		 <prog />
		  // if (isLoggedIn) {
		  //   return <NavbarUser />;
		  // }
		  // return <NavbarGuest />;

		);
	}
}



export default NavBarToggle;
