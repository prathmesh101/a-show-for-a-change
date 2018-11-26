import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import '../../assets/css/sign-up.css';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost/API_PHP/signupapi.php";
    console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    alert("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload = {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "password": this.state.password
    }
    axios.post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
          //  console.log("registration successfull");
          var loginscreen = [];
          loginscreen.push(<Login parentContext={this} />);
          var loginmessage = "Not Registered yet.Go to registration";
          self.props.parentContext.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage,
            buttonLabel: "Register",
            isLogin: true
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {

    return (

      <div>
        <form>
          <div className="form-group">
            <h2 className="signup-head-text">Create Your Account</h2>
            <div className="div-underline">
              <i className="fas fa-user inlineBlock fillWhite"></i>
              <input type="text" className="inlineBlock" name="firstname" id="firstname" placeholder="Your Name" onChange={(event, newValue) => this.setState({ first_name: newValue })} />
            </div>
          </div>

          <div className="form-group">
            <div className="div-underline">
              <i className="fas fa-envelope fillWhite"></i>
              <input type="email" className="inlineBlock" name="lastname" id="lastname" placeholder="Your Email" onChange={(event, newValue) => this.setState({ last_name: newValue })} />
            </div>
          </div>

          <div className="form-group">
            <div className="div-underline">
              <i className="fas fa-unlock-alt fillWhite"></i>
              <input type="password" className="inlineBlock" name="email" id="password" placeholder="Enter Password" onChange={(event, newValue) => this.setState({ email: newValue })} />
            </div>
          </div>

          <div className="form-group">
            <div className="div-underline">
              <i className="fas fa-unlock-alt fillWhite"></i>
              <input type="password" className="inlineBlock" name="password" id="passwordConfirmation" placeholder="Confirm Password" onChange={(event, newValue) => this.setState({ password: newValue })} />
            </div>
          </div>
          <div className="div-submit">
            <button type="submit" className="buttonGreen" onClick={(event) => this.handleClick(event)} >CONTINUE</button>
          </div>
        </form>

        <div className="div-signIn">
          <p>Already have an account? <span><a href="/sign-in" className="linkPrimary">SIGN IN</a></span></p>
        </div>

        <div className="div-progressIndicator">
          <svg height="28" width="40">
            <circle className="circle-active" cx="14" cy="14" r="13" fill="#00CB94" />
          </svg>
          <svg height="28" width="40">
            <circle cx="14" cy="14" r="13" fill="grey" />
          </svg>
          <svg height="28" width="40">
            <circle cx="14" cy="14" r="13" fill="grey" />
          </svg>
        </div>
      </div>
    );
  }
}

export default SignUp;


