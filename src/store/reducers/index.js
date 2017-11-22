/*
这里用来合并所有的reducer
* */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import home from './home'
import session from './session'
export default combineReducers({
    routerReducer,
    home,
    session
})