import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navigation from './navigation/';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
             <Navigation/>
        </div>    
    );
  }
}

export default Header;