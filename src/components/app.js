import React from 'react';
import '../assets/css/app.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js';

import Home from './nav-pages/home.js';
import About from './nav-pages/about.js';
{/* import FilmFestival from './nav-pages/film-festival'; */}

import SignIn from './nav-pages/sign-in';
import SignUp from './nav-pages/sign-up';
import Partners from './nav-pages/partners';
import SignUpSuccess from './nav-pages/sign-up-success';
import UserPage from './nav-pages/user-page';

const App = () => (
    <div>
        <div className="spacing-div">
            <BrowserRouter>
                <main>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/partners" component={Partners} />
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="/sign-up" component={SignUp} />
                    </Switch>
                </main>
            </BrowserRouter>

         {/*   <Route exact path="/" component={Home} /> */}

        {/*   <Route path="/about" component={About} />  */}
         {/*  <Route path="/film-festival" component={FilmFestival} /> */}

           {/* <Route exact path="/sign-in" component={SignIn} /> */}
           {/* <Route exact path="/sign-up" component={SignUp} /> */}
          {/*  <Route path="/credit-card" component={CreditCard} /> */}
          {/*  <Route path="/user-page" component={UserPage} /> */}
          {/*  <Route path="/success" component={SignUpSuccess} /> */}
            {/* <Footer /> */}
        </div>
    </div>
);

export default App;
