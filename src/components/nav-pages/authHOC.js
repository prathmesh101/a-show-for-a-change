import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Header from './header.js';
import Footer from './footer.js';
import UserPage from './user-page.js';
import SignIn from './sign-in.js';
import SignUp from './sign-up.js';

export default component => {
  class AuthenticateRoute extends Component {
    constructor() {
      super();

      this.state = {};
    }

    componentDidMount() {
      this.checkAndRedirect();
    }

    componentDidUpdate() {
      this.checkAndRedirect();
    }

    isLoggedin() {}

    isLoggedOut() {}

    isLoading() {}
  }
};
