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


  handleChange = this.handleChange.bind(this);
  handleClick = this.handleClick.bind(this);

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state);
  }


  handleClick(event) {
    var apiBaseUrl = "./api_php/signupapi.php";
    console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    alert("values are " + this.state.first_name + "   " + this.state.email);
    //To be done:check name empty values before hitting submit
    var self = this;
    var payload = {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "password": this.state.password
    }
    axios.post(apiBaseUrl, payload)
      .then(function (response) {
        alert(JSON.stringify(response));
        console.log(response);
        //if (response.status == 200) {
          if (response.message == "success") {
          console.log("registration successfull");
          alert("status is 200");
          /* var loginscreen = [];
                 loginscreen.push(<Login parentContext={this} />);
                 var loginmessage = "Not Registered yet.Go to registration";
                 self.props.parentContext.setState({
                   loginscreen: loginscreen,
                   loginmessage: loginmessage,
                   buttonLabel: "Register",
                   isLogin: true
                 });*/
        } else {
          alert("not equal to 200 but what it is we don't know");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Error is " + error.response.data + "  " + error.response.status + "  " + JSON.stringify(error.response.headers));
      });
  }

  render() {

    return (
      <div className="signup-background">

        <div className="container signup-content">

          <div className="row sign-align">

            <div className="col-sm-10">

              <form>
                <h2 className="signup-head-text">Sign Up Form</h2>

                <div className="form-group">

                  <label name="firstname">First Name</label>

                  <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Enter first name" size="10" onChange={this.handleChange} />

                </div>

                <div className="form-group">

                  <label name="lastname">Last Name</label>

                  <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Enter last name" onChange={this.handleChange} />

                </div>

                <div className="form-group">

                  <label name="email">E-mail</label>

                  <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" onChange={this.handleChange} />

                </div>

                <div className="form-group">

                  <label name="password">Password</label>

                  <input type="text" className="form-control" name="password" id="password" placeholder="Enter password" onChange={this.handleChange} />

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

export default SignUp;
