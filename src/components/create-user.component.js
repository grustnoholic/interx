import React, { Component } from 'react';
import axios from 'axios';
import './user-form.css';

export default class CreateUser extends Component {
	constructor(props) {
        super(props);
        
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			email: '',
			password: ''
		};
    }
    
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        }) 
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        }) 
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        }) 
    }

	onSubmit(e) {
		e.preventDefault();

		const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
		}

        console.log(user);

		axios.post('http://localhost:5000/users/add', user)
			.then(res => console.log(res.data));

		this.setState({
            username: '',
            email: '',
            password: ''
		})
	}

	render() {
		return (
			<div>
				<div className="container">
					<form onSubmit={this.onSubmit}>
						<div class="form-group">
							<label for="InputUsername">Username</label>
							<input
								type="text"
								class="form-control"
                                id="InputUsername"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
								placeholder="Enter username"
								style={{ width: '15em' }}
								required
							></input>
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input
								type="email"
								class="form-control"
                                id="exampleInputEmail1"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
								aria-describedby="emailHelp"
								placeholder="Enter email"
								style={{ width: '15em' }}
								required
							></input>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								class="form-control"
                                id="exampleInputPassword1"
                                value={this.state.password}
                                onChange={this.onChangePassword}
								placeholder="Password"
								style={{ width: '15em' }}
								required
							></input>
						</div>
						<button type="submit" class="btn btn-outline-secondary" value="Create User">
							Submit
						</button>
					</form>
				</div>
				<div className="picture">
					<p>picture</p>
				</div>
			</div>
		);
	}
}
