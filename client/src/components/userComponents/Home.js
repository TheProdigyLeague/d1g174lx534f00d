import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div>I'm Home</div>
        <Link to="/register"><button>Register</button></Link>
        <br />
        <Link to="/login"><button>Login</button></Link>
      </div>
    )
  }
}
