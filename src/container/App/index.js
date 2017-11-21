import React,{Component} from 'react';
import {Route} from 'react-router-dom'
import Profile from "../Profile/index";
import Tab from "../../components/Tab/index";
import createHistory from 'history/createHashHistory';
const history = createHistory();
import {ConnectedRouter} from 'react-router-redux';
import Login from "../Login/index";
import Register from "../Register/index";
export default class App extends Component{
    render(){
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Tab/>
                </div>
            </ConnectedRouter>
        )
    }
}
