/*
这里用来合并所有的reducer
* */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import cart from './cart'
export default combineReducers({
    routerReducer,
    cart
})