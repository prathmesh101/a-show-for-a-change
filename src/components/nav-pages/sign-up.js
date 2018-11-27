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
    var apiBaseUrl = "signupapi.php";
    console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    alert("values are " + this.state.first_name + "   " + this.state.email);
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
        if (response.data.code == 200) {
          console.log("registration successfull");
alert("success " + response);          
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
  alert("Error is " + error.response.data + "  " + error.response.status + "  " + error.response.headers);
      });
  }

  render() {

    return (
        <div className="signup-background">

          <div className="container signup-content">

            <div className="row sign-align">

              <div class="col-sm-10">

                <form>
                      <h2 className="signup-head-text">Sign Up Form</h2>

                  <div className="form-group">

                    <label for="firstname">First Name</label>
                    <input type="text" class="form-control" name="first_name" id="first_name" placeholder="Enter First name" size="10" onChange={(event, newValue) => this.setState({ first_name: newValue })} />
                  </div>

                  <div className="form-group">

                    <label for="lastname">Last Name</label>
                    <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Enter Last name" onChange={(event, newValue) => this.setState({ last_name: newValue })} />
                  </div>

                  <div className="form-group">

                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Enter email" onChange={(event, newValue) => this.setState({ email: newValue })} />
                  </div>

                  <div className="form-group">

                    <label for="password">Password</label>
                    <input type="text" class="form-control" name="password" id="password" placeholder="Enter password" onChange={(event, newValue) => this.setState({ password: newValue })} />
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


