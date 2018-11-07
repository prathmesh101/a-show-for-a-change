import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
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
  //example change helllo sample projject 
  handleClick(event) {
    var apiBaseUrl = "http://localhost:8888/API_PHP/signupapi.php";
    console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload = {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "password": this.state.password
    }
    axios.post(apiBaseUrl + '/register', payload)
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
        <h1>Sign Up Form</h1>
        <label>First Name</label>
        <input type="text" name="username" placeholder="First name" onChange={(event, newValue) => this.setState({ first_name: newValue })} />
        <label>Last name</label>
        <input type="text" name="lastname" placeholder="Last name" onChange={(event, newValue) => this.setState({ last_name: newValue })} />
        <label>E-mail</label>
        <input type="text" name="username" placeholder="email" onChange={(event, newValue) => this.setState({ email: newValue })} />
        <label>Password</label>
        <input type="text" name="username" placeholder="password" onChange={(event, newValue) => this.setState({ password: newValue })} />

        <input type="submit" onClick={(event) => this.handleClick(event)} />

      </div>
    );
  }
}

export default SignUp;
