import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nav } from 'reactstrap';



class App extends Component {
  render() {
    return (
      <div>
        
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
         <img src={logo} className="App-logo" alt="logo" />
        </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/Home">Home
                <span class="sr-only">(current)</span>
              </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Home">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profits</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>  

  

<div class="container">
  <h1 class="mt-4">Logo Nav by Start Bootstrap</h1>
  <Home />
</div>

</div>        
        
            );
  }
}

export default App;
