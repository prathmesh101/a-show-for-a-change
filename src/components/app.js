import React from 'react';
import '../assets/css/app.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js';

import Home from './nav-pages/home';
import About from './nav-pages/about';
{/* import FilmFestival from './nav-pages/film-festival'; */}

import SignIn from './nav-pages/sign-in';
import SignUp from './nav-pages/sign-up';
import CreditCard from './nav-pages/credit-card';
import SignUpSuccess from './nav-pages/sign-up-success';
import UserPage from './nav-pages/user-page';

const App = () => (
    <div>
        <div className="spacing-div">
            <Header />
         {/*   <Route exact path="/" component={Home} /> */}

           <Route path="/about" component={About} /> 
         {/*  <Route path="/film-festival" component={FilmFestival} /> */}

          {/*  <Route path="/sign-in" component={SignIn} /> */}
          {/*  <Route path="/sign-up" component={SignUp} /> */}
          {/*  <Route path="/credit-card" component={CreditCard} /> */}
          {/*  <Route path="/user-page" component={UserPage} /> */}
          {/*  <Route path="/success" component={SignUpSuccess} /> */}
            {/* <Footer /> */}
        </div>
    </div>
);

export default App;
