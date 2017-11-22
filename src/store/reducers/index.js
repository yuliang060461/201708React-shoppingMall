/*
这里用来合并所有的reducer
* */
import {combineReducers} from 'redux';
import home from './home';
import {routerReducer} from 'react-router-redux';
import cart from './cart'
import search from './search'
export default combineReducers({
    routerReducer,
    cart,
    home,
    search
})