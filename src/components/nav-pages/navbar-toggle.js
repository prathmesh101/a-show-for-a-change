import React from 'react';
import NavbarGuestPart from './navbar-guest.js';
import NavbarUserPart from './navbar-user.js';


function NavbarUser(state) {
  return <NavbarUserPart />;
}

function NavbarGuest(state) {
  return <NavbarGuestPart />;
}

const NavBarToggle = state => {


  const isLoggedIn = state.isLoggedIn;
  //const isLoggedIn = this.props.isLoggedIn;

  if (isLoggedIn) {
    return <NavbarUser />;
  }
  return <NavbarGuest />;
}

// class NavBarToggle extends React.Component {

// 	componentDidMount (props) {
// 		const  { isLogged }  = this.props.isLoggedIn;

// 		if (isLogged) {
// 			const prog = "NavbarUser";
// 		} else {
// 			const prog = "NavbarGuest";
// 		}
// 	}



// 	render () {
// 		return (

// 		 //const isLoggedIn = state.isLoggedIn;
<<<<<<< HEAD

=======
		 
>>>>>>> 42597b144d4c3c7d529e2b126967ba6fe4e56b15
// 		 <prog />
// 		  // if (isLoggedIn) {
// 		  //   return <NavbarUser />;
// 		  // }
// 		  // return <NavbarGuest />;

// 		);
// 	}
// }



export default NavBarToggle;
