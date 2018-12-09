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


  async handleClick(event) {

    var apiBaseUrl = "./api_php/signupapi.php";
    console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    alert("values are " + this.state.first_name + "   " + this.state.email);
    //To be done:check name empty values before hitting submit
    var self = this;
    var params = {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "password": this.state.password,
    };
    //var payload = this.state.first_name;

    await axios.post(apiBaseUrl, {first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email, password: this.state.password})

      .then(function (response) {
        alert("here");
        alert(JSON.stringify(response));
        console.log(response);
        // console.log(response);
        //var res = JSON.parse(response);
        //if (response.status == 200) {
        if (true) {
          //if (response == "success") {
          console.log("registration successfull");
          alert("status is 200");
          //var loginscreen = [];
          // loginscreen.push(<Login parentContext={this} />);
          //var loginmessage = "Not Registered yet.Go to registration";
          // self.props.parentContext.setState({
          //   loginscreen: loginscreen,
          //   loginmessage: loginmessage,
          //   buttonLabel: "Register",
          //   isLogin: true
          // });
        } else {
          alert("not equal to 200 but what it is we don't know");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Error is " + error.response.data + "  " + error.response.status + "  " + JSON.stringify(error.response.headers));
      });

    //alert(lalala.json());

  }

  // componentDidMount() {
  //       if (!this.state.data) {
  //           this.handleClick().then(data => this.setState({data}){alert(data);})
  //                         .catch(err => { "error occured"});
  //       }
  //   }

  render() {

    return (

      <div>
        <form>
          <div className="form-group">
            <h2 className="signup-head-text">Create Your Account</h2>
            <div className="div-underline">
              <i className="fas fa-user inlineBlock fillWhite"></i>
              <input type="text" className="form-control inlineBlock" name="first_name" id="firstname" placeholder="Enter first name" size="10" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="div-underline">
              <i className="fas fa-user inlineBlock fillWhite"></i>
              <input type="text" className="form-control inlineBlock" name="last_name" id="lastname" placeholder="Enter last name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="div-underline">
              <i className="fas fa-envelope fillWhite"></i>
              <input type="email" className="form-control inlineBlock" name="email" id="email" placeholder="Enter email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="div-underline">
              <i className="fas fa-unlock-alt fillWhite"></i>
              <input type="password" className="form-control inlineBlock" name="password" id="password" placeholder="Enter password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="div-submit">
            <button type="submit" className="buttonGreen" onClick={(event) => this.handleClick(event)} >CONTINUE</button>
          </div>
        </form>
        <div className="div-signIn">
          <p>Already have an account? <span><a href="/sign-in" className="linkPrimary">SIGN IN</a></span></p>
        </div>
        {/* <div className="div-progressIndicator">
          <svg height="28" width="40">
            <circle className="circle-active" cx="14" cy="14" r="13" fill="#00CB94" />
          </svg>
          <svg height="28" width="40">
            <circle cx="14" cy="14" r="13" fill="grey" />
          </svg>
          <svg height="28" width="40">
            <circle cx="14" cy="14" r="13" fill="grey" />
          </svg>
        </div> */}
      </div>

    );
  }
}

export default SignUp;
