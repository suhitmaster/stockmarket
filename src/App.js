import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul className="App-menu">
              <li> <img src={logo} className="App-logo" alt="logo" /></li>
              <li className="App-menuItem">Home</li>
          </ul>          
        </header>
        
        <Home />
      </div>
    );
  }
}

export default App;
