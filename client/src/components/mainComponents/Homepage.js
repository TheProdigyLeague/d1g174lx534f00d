import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class Homepage extends Component {
  render(){
    return(
      <div>
        <h1>I am the homepage!</h1>
        <Link to='/login'>Log In!</Link>
        <Link to='/register'>Register</Link>
      </div>
    )
  }
}

export default Homepage;
