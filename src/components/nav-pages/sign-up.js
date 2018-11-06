import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: null
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target.value);

		const user = {
				name: this.state.fullName
		}

		axios.post(`https://jsonplaceholder.typicode.com/users`, { user: user })
			.then(res => {
				console.log(res);
				console.log(data);
			})
	}

	handleInputChange = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render () {
		const {fullName} = this.state;
		return (
			<div>
				<h1>Sign Up Form</h1>
				<p>Full Name is {fullName}</p>
				<form onSubmit={this.handleSubmit}>
					<p><input type='text' name='fullName' placeholder='Your Name' onChange={this.handleInputChange}></input></p>
					<p><button>Register</button></p>
				</form>
			</div>
		)
	}
}

export default SignUp;
