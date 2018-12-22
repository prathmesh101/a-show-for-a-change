import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
//import '../../assets/css/sign-in.css';
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
    var apiBaseUrl = "https://dev.sageape.com/api_php/signupapi_test.php";
    var self = this;

    axios.post(apiBaseUrl, { email: this.state.email, password: this.state.password})
      .then(() => this.setState({ redirect: true }));
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

      <div className="signin-background">

        <div className="container signin-content" style={{ paddingTop: '50px' }}>

          <div className="row signin-align">

            <div className="col-sm-10">

              <form>
                <h2 className="signin-head-text">Login</h2>



                <div className="form-group">

                  <label type="email">E-mail</label>
                  <input type="email" className="form-control" name="email" id="firstname" placeholder="Enter email" onChange={(event, newValue) => this.setState({ email: newValue })} />

                </div>

                <div className="form-group">

                  <label type="password">Password</label>
                  <input type="text" className="form-control" name="password" id="password" placeholder="Enter email" onChange={(event, newValue) => this.setState({ password: newValue })} />

                </div>

                <button type="submit" className="btn btn-primary" onClick={(event) => this.handleClick(event)} >Submit</button>

              </form>

            </div>

          </div>

        </div>

      </div>


    );
  }
}

export default SignIn;
