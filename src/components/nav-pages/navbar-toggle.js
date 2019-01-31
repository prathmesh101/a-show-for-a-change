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


  //const isLoggedIn = state.isLoggedIn;
  const isLoggedIn = this.state.isLoggedIn;

  if (isLoggedIn) {
    return <NavbarUser />;
  }
  return <NavbarGuest />;
}



export default NavBarToggle;
