import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import '../../assets/css/sign-up.css';
import { Link, Redirect } from 'react-router-dom';
import UserPage from './user-page.js';
// import { Redirect } from 'react-router';

// sample data for user:
import usersData from '../../../dist/api_php/data.js';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      redirect: false,
      tokenId: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick(event) {
    event.preventDefault();
    // var apiBaseUrl = "https://dev.sageape.com/api_php/signupapi.php";
    // console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    // To be done:check name empty values before hitting submit
    // var self = this;

    // the token expiry should come from the backend.
    // clear the localStorage, async function that get run on timeout:
    const clearToken = () => {
      // save token to state so that we can clear the async func if we logout before expiry
      this.setState({
        tokenId: setTimeout(() => localStorage.removeItem('authToken'), 5000)
      });
      return;
    }
    // add token to localStorage
    const setToken = (token) => {
      return localStorage.setItem('authToken', token);
    }
    // token generator should be in the server
    const generateToken = () => {
      return Math.floor(Math.random() * (999999 - 100000) + 100000);
    }

    const params = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      token: generateToken()
    };

    const userValidator = () => {
      let existingUser = false;

      for (let user of usersData) {
        if (user.email === this.state.email) {
          existingUser = true;
        }
      }

      if (existingUser) {
        alert('Invalid Email');
        return;
      } else {
        usersData.push(params);
        console.log('users: ', usersData);
        setToken(usersData[usersData.length - 1].token);
        // remove token in given time or if the user did not logout:
        clearToken();
        this.setState({ redirect: true })
        return;
      }
    }

    userValidator();

    /******
    // axios to an endpoint for the json webtoken
    axios({
      // temporary method for it to
      method: 'get',
      url: '/',
      data: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
      }
    }).then(data => {
    }).catch(err => {
      console.log('error authenticating user: ', err);
    })
    //////////////////////////////////////////////
    *****/

    /*****
    Assume axios (backend) works focus on authorization
    var payload = this.state.first_name;
    axios.post(apiBaseUrl, {first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email, password: this.state.password})
        .then(() => this.setState({ redirect: true }));
    
    axios.post(apiBaseUrl, {first_name: this.state.first_name,
                            last_name: this.state.last_name,
                            email: this.state.email,
                            password: this.state.password})
      .then((response) => {
        if (response.data["message"] == "success") {
          this.setState({ redirect: true });
        } else {
          alert("Unable to register.");
        }
      });
    */
    /*****
      .then(function (response) {
        this.props.history.push('/UserPage');
        alert("here");
        alert(JSON.stringify(response));
        console.log(response);
        console.log(response);
        var res = JSON.parse(response);
        if (response.status == 200) {
          if (response.status == 200) {
            if (response == "success") {
          console.log("registration successfull");
          alert("status is 200");
          console.log("registration successfull");
          alert("status is 200");
          var loginscreen = [];
          loginscreen.push(<Login parentContext={this} />);
          var loginmessage = "Not Registered yet.Go to registration";
          self.props.parentContext.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage,
            buttonLabel: "Register",
            isLogin: true
          });
        } else {
          alert("not equal to 200 but what it is we don't know");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Error is " + error.response + "  " + error.response.status + "  " + JSON.stringify(error.response.headers));
      });
      } else {
        alert("not equal to 200 but what it is we don't know");
      }
    })
    .catch(function (error) {
      console.log(error);
      alert("Error is " + error.response + "  " + error.response.status + "  " + JSON.stringify(error.response.headers));
    });
    ******/
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to='/user-page' />;
    } else {
      return (
        <div className="div-signUpDiv">
          <form className="div-form">
            <div className="div-headText">
              <h2 className="headText">Sign up</h2>
            </div>
            <div className="form-group">
              <div className="div-underline">
                <i className="fas fa-user inlineBlock fillPrimary"></i>
                <input type="text" className="inlineBlock" name="first_name" id="firstname" placeholder="First name" size="10" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="div-underline">
                <i className="fas fa-user inlineBlock fillPrimary"></i>
                <input type="text" className="inlineBlock" name="last_name" id="lastname" placeholder="Last name" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="div-underline">
                <i className="fas fa-envelope inlineBlock fillPrimary"></i>
                <input type="email" className="inlineBlock" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="div-underline">
                <i className="fas fa-unlock-alt fillPrimary"></i>
                <input type="password" className="inlineBlock" name="password" id="password" placeholder="Password" onChange={this.handleChange} />
              </div>
            </div>
            <div className="div-submit">
              <button type="submit" className="buttonGreen" onClick={(event) => this.handleClick(event)} >CONTINUE</button>
            </div>
            <div className="div-signUpFooter">
              <span>
                <p>Already have an account?</p>
                <div className="div-center">
                  <p><Link to="/sign-in" className="linkPrimary">SIGN IN</Link></p>
                </div>
              </span>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default SignUp;
