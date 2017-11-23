/*
这里用来合并所有的reducer
* */
import {combineReducers} from 'redux';


import commodity from './commodity';
import {routerReducer} from 'react-router-redux';
import search from './search'
import home from './home'
import session from './session'
import cart from './cart'
import vip from './vip'
export default combineReducers({
    routerReducer,
    home,
    commodity,
    search,
    vip,
    session

})