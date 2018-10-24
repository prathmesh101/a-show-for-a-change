import React from 'react';
import '../assets/css/app.css';
import { Route } from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js';

import Home from './nav-pages/home';
import About from './nav-pages/about';
import FilmFestival from './nav-pages/film-festival';
import Partners from './nav-pages/partners';
import Projects from './nav-pages/projects';
import Contact from './nav-pages/contact';
import SignIn from './nav-pages/sign-in';
import SignUp from './nav-pages/sign-up';

const App = () => (
    <div>
        <div className="spacing-div">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/film-festival" component={FilmFestival} />
            <Route path="/partners" component={Partners} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Footer />
        </div>
    </div>
);

export default App;
