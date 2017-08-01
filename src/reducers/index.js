import {combineReducers} from 'redux';
import navigation from './navigationReducers';
import products from './productReducers'
import product from './productDetailReducers'

const rootReducer = combineReducers({
  navigation,
  products,
  product
})

export default rootReducer;