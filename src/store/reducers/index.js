/*
这里用来合并所有的reducer
* */
import {combineReducers} from 'redux';
<<<<<<< HEAD
import home from './home';
import commodity from './commodity';
=======

>>>>>>> be97fde9ca82fb7b02b39d6c325ef47c9b00647f
import {routerReducer} from 'react-router-redux';
import cart from './cart'
import search from './search'
import home from './home'
import session from './session'

import vip from './vip'
export default combineReducers({
    routerReducer,
    cart,
    home,
<<<<<<< HEAD
    commodity,
=======
    search,
    vip,
    session
>>>>>>> be97fde9ca82fb7b02b39d6c325ef47c9b00647f
})