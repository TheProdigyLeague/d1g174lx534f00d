import React, { Component } from 'react';

export default class Login extends Component {
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
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label className="login-username-text">Username:
            <input
              className="login-input-username"
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.username} />
          </label>
          <br></br>
          <br></br>
          <label className="login-password-text">Password:
            <input
              className="login-input-password"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password} />
          </label>
          <button className="login-input-submit" type="submit" value="Submit">Login</button>
        </form>
      );
    }
  }
