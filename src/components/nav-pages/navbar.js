import React from 'react';
//import 'bootstrap';
import Home from './home.js';
import About from './about.js';
import '../../assets/css/navbar.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (

      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
          <nav>
            <NavLink to="/home">
              Home
            </NavLink>
            <NavLink to="/about">
              About
            </NavLink>
          </nav>
        </main>
      </BrowserRouter>

    )
}

export default NavBar;
