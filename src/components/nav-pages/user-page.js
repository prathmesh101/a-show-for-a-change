import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import '../../assets/css/user-page.css';
import { Link } from 'react-router-dom';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

      video:''

    }
  }

  onChange(e){
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      const url = "URL goes here";
      const formData = { file: e.target.result }
      return post (url, formData)
              .then(response => console.warn("result", response))
    }
  }


  }

  render() {
    return (

      <div style={{paddingTop:'100px', color:'white'}}>
        <h1>Hello</h1>
        <p>Upload Video</p>
      	<div onSubmit={this.onFormSubmit}>
          <input type="file" name="file" text="Upload Video" onChange={(e) => this.onChange(e)} />

        </div>
      </div>


    );
  }
}

export default UserPage;
