import React, { Component } from 'react';
import '../../assets/css/sign-up-success.css';

class SignUpSuccess extends Component {
  constructor(props) {
     super(props);
     this.state = {

      redirect: false
    }
  }


       handleClick = this.handleClick.bind(this);


   handleClick(event) {
     event.preventDefault();

    //var payload = this.state.first_name;
  this.setState({ redirect: true });




  }


  render() {
    const { redirect } = this.state;

   if (redirect) {
        return <Redirect to='./user-page'/>;
      }

    return (
      <div>
        <div className="form-group">
          <h2 className="signup-head-text">Success!</h2>
          <p>Your account has been created.</p>
          <p>Ready to watch?</p>
        </div>
        <form>
          <div className="div-submit">
            <button type="submit" className="buttonGreen"  onClick={(event) => this.handleClick(event)}  >CONTINUE</button>
          </div>
        </form>
        <div className="div-signIn">
          <p>Let's sign in.</p>
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
    )
  }
}

export default SignUpSuccess;
