import {createStore, combineReducers} from 'redux';  
import unsplashReducer from './unsplashReducer'
import swellReducer from './swellReducer'

export default combineReducers({
  unsplashReducer, swellReducer})  
