import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import '../../assets/css/sign-in.css';
import { Link } from 'react-router-dom';
import UserPage from './user-page.js';
import App from '../app.js';
import { Redirect } from 'react-router';

// sample data for user:
import usersData from '../../../dist/api_php/data.js';

// redux:
import { connect } from 'react-redux';
// action:
import { userLogin } from '../../store/actions/userAction.js';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      tokenId: '',
      redirect: false,
      error: false,
      incomplete: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFocus() {
    this.setState({ error: false });
    this.setState({ incomplete: false });
  }

  handleValidation() {
    if (!this.state.email || !this.state.password) {
      this.setState({ incomplete: true });
      return;
    } else {
      // clear the localStorage, async function that get run on timeout:
      const clearToken = () => {
        return setTimeout(() => localStorage.removeItem('authToken'), 1000000);
      };

      // token generator should be in the server
      const generateToken = () => {
        let token = Math.floor(Math.random() * (999999 - 100000) + 100000);
        return token;
      };

      // Will use sample data temporarily now
      for (let user of usersData) {
        if (
          user.email === this.state.email &&
          user.password === this.state.password
        ) {
          const token = generateToken();
          localStorage.setItem('authToken', token);
          this.setState({ tokenId: token });
          // remove token in given time:
          clearToken();

          // redux:
          this.props.login({
            isLoggedIn: true,
            // first_name: this.state.first_name,
            // last_name: this.state.last_name,
            email: this.state.email,
            tokenId: token
          });

          // set state to be able to redirect:
          this.setState({ redirect: true });
          return;
        }
      }
      this.setState({ error: true });
      return;
    }
  }

  handleClick(event) {
    event.preventDefault();
    var apiBaseUrl = 'https://dev.sageape.com/api_php/signinapi.php';
    var self = this;

    this.handleValidation();

    /*******
    // axios.post(apiBaseUrl, { email: this.state.email, password: this.state.password})
    //   .then(() => this.setState({ redirect: true }));

    axios.post(apiBaseUrl, { email: this.state.email, password: this.state.password })
      .then((response) => {
        if (response.data["message"] == "success") {
          // this.props.callbackFromParent(true);
          this.setState({ redirect: true });
        } else {
          alert("Problem logging in. \n Please try again.");
        }
      });
        ////
        // .then(function (response) {
        //   console.log(response);
        //   if (response.data.code == 200) {
        //     console.log("Login successfull");
        //     var uploadScreen = [];
        //     uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
        //     self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
        //   }
        //   else if (response.data.code == 204) {
        //     console.log("email password do not match");
        //     alert("email password do not match")
        //   }
        //   else {
        //     console.log("email does not exists");
        //     alert("email does not exist");
        //   }
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
        ////
    *******/
  }
  render() {
    const error = (() => {
      if (!this.state.email && this.state.incomplete) {
        return (
          <div className={'text-danger'}>
            <p>Email Input Missing</p>
          </div>
        );
      } else if (!this.state.password && this.state.incomplete) {
        return (
          <div className={'text-danger'}>
            <p>Password Input Missing</p>
          </div>
        );
      } else if (this.state.error) {
        return (
          <div className={'text-danger'}>
            <p>Invalid Login Credentials</p>
          </div>
        );
      } else {
        return '';
      }
    })();

    if (this.state.redirect) {
      return <Redirect to="/user-page" />;
    } else {
      return (
        <div className="div-signIn">
          <div className="div-form">
            <form>
              <div className="div-headText">
                <h2 className="headText">Sign in</h2>
              </div>
              <div className="form-group">
                <div className="div-underline">
                  <i className="fas fa-envelope fillPrimary inline" />
                  <input
                    type="email"
                    className="inline"
                    name="email"
                    id="firstname"
                    placeholder="Email"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="div-underline">
                  <i className="fas fa-unlock-alt fillPrimary" />
                  <input
                    type="password"
                    className="inline password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                  />
                </div>
              </div>
              <div className="div-submit">
                {error}
                <button
                  type="submit"
                  className="buttonGreen"
                  onClick={event => this.handleClick(event)}
                >
                  SIGN IN
                </button>
              </div>
              <div className="div-options">
                <span>
                  <input type="checkbox" id="checkbox" />Remember Me
                </span>
                <span>Need Help?</span>
              </div>
            </form>
            <div className="div-footer">
              <span>
                <p>New to movikarma?</p>
                <div className="div-center">
                  <p>
                    <Link to="/sign-up" className="linkPrimary">
                      JOIN
                    </Link>
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: userObj => {
      dispatch(userLogin(userObj));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
