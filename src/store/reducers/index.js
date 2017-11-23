/*
这里用来合并所有的reducer
* */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import commodity from './commodity';
import search from './search'
import home from './home'
import session from './session'
import cart from './cart'
import vip from './vip'
import detail from './detail'
export default combineReducers({

    routerReducer,
    cart,
    home,
    commodity,
    search,
    vip,
    session,
    detail
})