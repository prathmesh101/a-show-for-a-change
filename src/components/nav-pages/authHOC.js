import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

export default (WrappedComponent) => {
  class AuthenticateRoute extends Component {
    constructor() {
      super();

      this.state = { withToken: false };
    }

    componentWillMount() {
      this.isLoggedin();
    }

    componentDidMount() {
      this.isLoggedin();
    }

    componentDidUpdate() {
      this.isLoggedin();
    }

    isLoggedin() {
      // if no token:
      if (localStorage.getItem('authToken')) {
        this.setState({ withToken: true })
      }
    }

    // future implementation:
    // isLoggedOut() { }
    // isLoading() { }

    render() {
      if (this.state.withToken) {
        return <WrappedComponent {...this.props} />
      } else {
        return <Redirect to='/sign-in' />;
      }
    }
  }

  return AuthenticateRoute;
};
