import React,{Component} from 'react';
import {Route} from 'react-router-dom'
import Profile from "../Profile/index";
import Home from "../Home/index";
import Tab from "../../components/Tab/index";
import createHistory from 'history/createHashHistory';
const history = createHistory();
import {ConnectedRouter} from 'react-router-redux';
export default class App extends Component{
    render(){
        return (
            <ConnectedRouter history={history}>
                <div style={{height:'100%'}}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/profile" component={Profile}/>
                    <Tab/>
                </div>
            </ConnectedRouter>
        )
    }
}
