/*
* 仓库导出
* */
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './reducers/index';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
const history = createHistory();//用来管理路由历史的
let router = routerMiddleware(history);
let store = createStore(reducer,applyMiddleware(thunk,promise,router,logger));
window.store=store;
export default store;