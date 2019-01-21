import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import '../../assets/css/sign-in.css';
import { Link } from 'react-router-dom';
import UserPage from './user-page.js';
import { Redirect } from 'react-router';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    }
  }



     handleClick = this.handleClick.bind(this);

     


  handleClick(event) {
    var apiBaseUrl = "https://dev.sageape.com/api_php/signinapi.php";
    var self = this;

    axios.post(apiBaseUrl, { email: this.state.email, password: this.state.password})
      .then(() => this.setState({ redirect: true }));

    axios.post(apiBaseUrl, { email: this.state.email, password: this.state.password})
      .then(function(response){
        console.log(response);
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
        return <Redirect to='./user-page'/>;
      }

    return (

      <div className="div-signIn">
        <div className="div-form">
          <form>
            <div className="form-group">
            <h2 className="headText">Login</h2>
              <div className="div-underline">
              <i className="fas fa-envelope fillWhite"></i>
                <input type="email" className="inlineBlock" name="email" id="firstname" placeholder="Enter email" onChange={(event, newValue) => this.setState({ email: newValue })} />            
              </div>
            </div>
            <div className="form-group">
              <div className="div-underline">
                <i className="fas fa-unlock-alt fillWhite"></i>
                <input type="text" className="inlineBlock" name="password" id="password" placeholder="Enter password" onChange={(event, newValue) => this.setState({ password: newValue })} />
              </div>
            </div>
            <div className="div-submit">
              <button type="submit" className="buttonGreen" onClick={(event) => this.handleClick(event)} >LOG IN</button>
            </div>
          </form>
          <div className="div-signIn">
            <p>Not a member yet? <span><Link to="/sign-up" className="linkPrimary">SIGN UP</Link></span></p>
          </div>
        </div>
      </div>

    );
  }
}

export default SignIn;
