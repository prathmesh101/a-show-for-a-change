import React, { Component } from 'react';
import '../assets/css/app.css';
import { Route, BrowserRouter } from 'react-router-dom';
import NavBar from './nav-pages/navigation/navbar';
import SideNav from './nav-pages/navigation/side-nav';
import Backdrop from './nav-pages/navigation/backdrop';
import Header from './header.js';
import Footer from './footer.js';

import Home from './nav-pages/home';
import About from './nav-pages/about';

import SignIn from './nav-pages/sign-in';
import SignUp from './nav-pages/sign-up';
import CreditCard from './nav-pages/credit-card';
import SignUpSuccess from './nav-pages/sign-up-success';
import UserPage from './nav-pages/user-page';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideNavOpen: false
        };

        this.handleSideNavClick = this.handleSideNavClick.bind(this);
        this.handleBackDropClick = this.handleBackDropClick.bind(this);
    }

    handleSideNavClick() {
        this.setState((prevState) => {
            return { sideNavOpen: !prevState.sideNavOpen };
        });
    }

    handleBackDropClick() {
        this.setState({ sideNavOpen: false });
    }

    render() {

        let backDrop;

        if (this.state.sideNavOpen) {
            backDrop = <Backdrop backDropClick={this.handleBackDropClick} />
        }
        return (
            <div className="app">
                <NavBar sideNavClickHandler={this.handleSideNavClick} />
                <SideNav open={this.state.sideNavOpen} />
                {backDrop}
                <main style={{ height: '500vh' }}>
                    <p>this is the body</p>
                </main>
                {/*
        <div className="spacing-div">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />

            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/credit-card" component={CreditCard} />
            <Route path="/user-page" component={UserPage} />
            <Route path="/success" component={SignUpSuccess} />
        </div>
    */}
            </div>
        );
    }
};

export default App;

