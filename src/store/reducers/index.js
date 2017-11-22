/*
这里用来合并所有的reducer
* */
import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';
import cart from './cart'
import search from './search'
import home from './home'
import session from './session'
import cart from './cart';
import vip from './vip'
export default combineReducers({
    routerReducer,
    cart,
    home,
    search,
    vip,
    session
})