import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FullInventory from './components/mainComponents/FullInventory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FullInventory />
      </div>
    );
  }
}

export default App;
