import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import '../../assets/css/user-page.css';
import { Link } from 'react-router-dom';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file_name: '',
      file_path: ''
    }
  }

  handleClick = this.handleClick.bind(this);

  handleClick(event) {
    event.preventDefault();

    var params = {
       "file_name": this.state.file_name,
       "file_path": this.state.file_path
    };
    var apiBaseUrl = "https://dev.sageape.com/api_php/uploadFile.php";


  }

  render() {
    return (

    	 <div style={{paddingTop:'100px', color:'white'}}><h1>Hello User</h1>
        <button type="submit" className="btn btn-primary" onClick={(event) => this.handleClick(event)}>Upload Video</button>
       </div>

    );
  }
}

export default UserPage;
