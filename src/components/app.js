import React from 'react';
import '../assets/css/app.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js';

import Home from './nav-pages/home.js';
import About from './nav-pages/about.js';
import SignIn from './nav-pages/sign-in.js';
import SignUp from './nav-pages/sign-up.js';
import Partners from './nav-pages/partners/partners_page';
import Genres from './nav-pages/genre.js';
import Influencer from './nav-pages/influencer.js';
import UserPage from './nav-pages/user-page.js';

const App = () => (
    <div>
        <div className="spacing-div">
            <BrowserRouter>
                <main>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path = "/partners" component = {Partners}/>
                        <Route path="/genre" component={Genres} />
                        <Route path="/influencer" component={Influencer} />
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/user-page" component={ UserPage} />
                        <Redirect to="{Home}" />
                    </Switch>
                    <Footer />
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
