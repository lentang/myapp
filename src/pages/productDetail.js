import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../widgets/header';
import Footer from '../widgets/footer';
import Product from '../widgets/productDetail';



class ProductDetail extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Product filter={this.props.params.filter}/>
        <Footer/>
      </div>
    );
  }
}

export default ProductDetail;
