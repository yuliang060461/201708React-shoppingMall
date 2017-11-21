import React, {Component} from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './common.less'
import store from './store';
import {Provider} from 'react-redux';
import App from "./container/App/index";

=======
import Vip from './container/index'

class Content extends Component{
    render(){
        return(<div>
            <Vip/>
        </div>)
    }
}
>>>>>>> liuyuwen02

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.querySelector('#root'));
