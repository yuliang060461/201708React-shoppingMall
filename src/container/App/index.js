import React,{Component} from 'react';
import {Route} from 'react-router-dom'
import Profile from "../Profile/index";
import List from '../List/index';
import Tab from "../../components/Tab/index";
import createHistory from 'history/createHashHistory';
import Vip from "../Vip/index"
const history = createHistory();
import {ConnectedRouter} from 'react-router-redux';
export default class App extends Component{
    render(){
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/list" component={List}/>
                    <Route path="/vip" component={Vip}/>
                    <Tab/>
                </div>
            </ConnectedRouter>
        )
    }
}
