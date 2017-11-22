import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './common.less'
import store from './store';
import {Provider} from 'react-redux';
import App from "./container/App/index";




ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.querySelector('#root'));
