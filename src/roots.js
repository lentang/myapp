import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import Home from './pages/home'
import Category from './pages/category'
import Product from './pages/productDetail'


/*
APP Router file. 
*/


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
       <Route path="/categories/(:filter?currentPage=:currentPage)" component={Category} />
       <Route path="/categories/(:filter)" component={Category} />
       <Route path="/product/(:filter)" component={Product} /> 
       <Route path="/(:filter)" component={Home} />  
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root