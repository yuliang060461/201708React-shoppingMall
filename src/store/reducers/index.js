/*
这里用来合并所有的reducer
* */
import {combineReducers} from 'redux';
import home from './home';
import cart from './cart'
import {routerReducer} from 'react-router-redux';
export default combineReducers({
    cart,
    home,
    routerReducer,
})