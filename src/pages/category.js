import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../widgets/header';
import Footer from '../widgets/footer';
import Products from '../widgets/productList';
import Facets from '../widgets/facets'


class App extends Component {

  // componentWillMount() {
  //       const script = document.createElement("script");
  //       script.type = 'text/javascript'
  //       script.src = "./facetrender.js";        
  //       this.instance.appendChild(script);
  // }

  render() {
    return (
      <div className="App">
          <Header/>
          <div>
            <Facets/>
            <Products currentPage={this.props.params.currentPage} filter={this.props.params.filter}/>
          </div>
          <Footer/> 
      </div>
    );
  }
}

export default App;
