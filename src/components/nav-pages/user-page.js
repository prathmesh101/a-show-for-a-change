import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import '../../assets/css/user-page.css';
import { Link } from 'react-router-dom';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (

    	 <div style={{paddingTop:'100px', color:'white'}}><h1>Hello User</h1>
       <button type="submit" className="btn btn-primary" >Upload Video</button>
       </div>

    );
  }
}

export default UserPage;
