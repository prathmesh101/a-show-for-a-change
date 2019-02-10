import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import '../../assets/css/sign-in.css';
import { Link } from 'react-router-dom';
import UserPage from './user-page.js';
import App from '../app.js';
import { Redirect } from 'react-router';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
     this.setState({ [event.target.name]: event.target.value })
  }


  handleClick(event) {
    event.preventDefault();
    var apiBaseUrl = "https://dev.sageape.com/api_php/signinapi.php";
    var self = this;

    // axios.post(apiBaseUrl, { email: this.state.email, password: this.state.password})
    //   .then(() => this.setState({ redirect: true }));

    axios.post(apiBaseUrl, { email: this.state.email, password: this.state.password})
      .then((response) => {
        if (response.data["message"] == "success") {
          // this.props.callbackFromParent(true);
          this.setState({redirect: true});
        } else {
          alert("Problem logging in. \n Please try again.");
        }
      });

/*
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
          console.log("Login successfull");
          var uploadScreen = [];
          uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
          self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
        }
        else if (response.data.code == 204) {
          console.log("email password do not match");
          alert("email password do not match")
        }
        else {
          console.log("email does not exists");
          alert("email does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
*/
  }
  render() {
    const { redirect } = this.state;

    if (redirect) {
        return <Redirect to='./user-page' />;
    }

    return (

      <div className="div-signIn">
        <div className="div-form">
          <form>
            <div className="div-headText">
              <h2 className="headText">Sign in</h2>
            </div>
            <div className="form-group">
              <div className="div-underline">
                <i className="fas fa-envelope fillPrimary inline"></i>
                <input type="email" className="inline" name="email" id="firstname" placeholder="Email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="div-underline">
                <i className="fas fa-unlock-alt fillPrimary"></i>
                <input type="password" className="inline" name="password" id="password" placeholder="Password" onChange={this.handleChange} />
              </div>
            </div>
            <div className="div-submit">
              <button type="submit" className="buttonGreen" onClick={(event) => this.handleClick(event)} >SIGN IN</button>
            </div>
            <div className="div-options">
              <span><input type="checkbox" id="checkbox"></input>Remember Me</span>
              <span>Need Help?</span>
            </div>
          </form>
          <div className="div-footer">
            <span>
              <p>New to Sage Ape?</p>
                <div className="div-center">
                  <p><Link to="/sign-up" className="linkPrimary">JOIN</Link></p>
                </div>
            </span>
          </div>
        </div>
      </div>

    );
  }
}

export default SignIn;
