import React, { Component } from 'react';


export default class Register extends Component {
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // preventDefault and lift state back up to the parent
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);

  }

  // update form state
  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    });
  }

    render() {
      return (
        <div className="register-container">
          <h1>SIGN UP: </h1>
          <form className="register-form" onSubmit={this.handleSubmit}>
            <label className="register-username-text">Username:
              <input
                className="register-input-username"
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username} />
            </label>
            <br></br>
            <label className="register-password-text">Password
              <input
                className="register-input-password"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password} />
            </label>
            <br></br>
            <button className="register-input-submit" type="submit" value="Submit">Sign Up</button>
          </form>
        </div>
      );
    }
  }
