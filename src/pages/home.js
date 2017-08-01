import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../widgets/header';
import Footer from '../widgets/footer';
class Home extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <div>This is Home page </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
