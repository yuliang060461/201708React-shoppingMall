/*
这里用来合并所有的reducer
* */
import {combineReducers} from 'redux';
import home from './home';
import commodity from './commodity';
import {routerReducer} from 'react-router-redux';
import cart from './cart'
export default combineReducers({
    routerReducer,
    cart,
    home,
    commodity,
})