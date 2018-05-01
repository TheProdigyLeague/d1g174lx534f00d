import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FullInventory from './components/mainComponents/FullInventory';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TokenService from './services/TokenService';
import UserHome from './components/userComponents/UserHome';
import Homepage from './components/mainComponents/Homepage';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      userData: null,
      apiDataRecieved: false,
      fireRedirect: false,
      homePageRedirect: false
    }
  }

  handleLogout() {
    TokenService.destroy();
    window.localStorage.clear();
    window.location.reload();
  }

  handleLoginRedirect() {
    this.setState({
      fireRedirect: true
    })
  }

  openModal() {
     let modal = document.querySelector('.simpleModal');
     modal.style.display = "block";
     this.setState({
       modalOpen: true
     })
   }

   closeModal() {
     console.log('Hello I Should Be Closing')
     let modal = document.querySelector('.simpleModal');
     modal.style.display = "none";
     this.setState({
       modalOpen: false
     })
   }

  loginButton() {
    return <button className="login" onClick={(e) => this.openModal()}>Login</button>
  }

  logoutButton() {
    return <button className="logout" onClick={(e) => this.handleLogout()}>Logout</button>
  }

  render() {
    return (
      <div className="App">
        {/* <FullInventory /> */}
        <Router>
          <div>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/login' component={UserHome} />
            <Route exact path='/register' component={UserHome} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
