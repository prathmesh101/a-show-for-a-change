import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import '../../assets/css/sign-in.css';
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
    var apiBaseUrl = "../../../API_PHP/signinapi.php";
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

      <div className="signin-background">

        <div className="container signin-content">

          <div className="row signin-align">

            <div class="col-sm-10">

              <form>
                <h2 className="signin-head-text">Login</h2>



                <div className="form-group">

                  <label for="email">E-mail</label>
                  <input type="email" class="form-control" name="email" id="firstname" placeholder="Enter email" onChange={(event, newValue) => this.setState({ username: newValue })} />

                </div>

                <div className="form-group">

                  <label for="password">Password</label>
                  <input type="text" class="form-control" name="password" id="password" placeholder="Enter email" onChange={(event, newValue) => this.setState({ password: newValue })} />

                </div>

                <button type="submit" class="btn btn-primary" onClick={(event) => this.handleClick(event)} >Submit</button>

              </form>

            </div>

          </div>

        </div>

      </div>


    );
  }
}

export default SignIn;



