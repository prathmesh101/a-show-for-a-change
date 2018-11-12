import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:8888/API_PHP/signinapi.php";
    var self = this;
    var payload = {
      "email": this.state.username,
      "password": this.state.password
    }
    axios.post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
          console.log("Login successfull");
          var uploadScreen = [];
          uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
          self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
        }
        else if (response.data.code == 204) {
          console.log("Username password do not match");
          alert("username password do not match")
        }
        else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {

    return (

      <div>
        <div id="Body">
          <div className="medium-5 columns">
            <h4>Login</h4>
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" />
<<<<<<< HEAD
            <br/>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={(event, newValue) => this.setState({ password: newValue })} />
            <br/>
            <input type="submit" className="button" value="Login" onClick={(event) => this.handleClick(event)} />
            <br/>
=======
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={(event, newValue) => this.setState({ password: newValue })} />
            <input type="submit" className="button" value="Login" onClick={(event) => this.handleClick(event)} />
>>>>>>> 4db2c7ff8f059c9df03c07a375ae1da6256c8649
            <a href="/signup">Registration</a>
          </div>
        </div>
      </div>

    );
  }
}

export default SignIn;



