import React,{Component} from 'react';
import {Route} from 'react-router-dom'
import Profile from "../Profile/index";
import Home from "../Home/index";
import List from '../List/index';
import Tab from "../../components/Tab/index";
import createHistory from 'history/createHashHistory';
import Vip from "../Vip/index";
const history = createHistory();
import {ConnectedRouter} from 'react-router-redux';
import Search from '../../container/Search'
import SearchList from "../SearchList/index";
import ShoppingCart from '../ShoppingCart';
import Login from "../Login/index";
import Register from "../Register/index";
import Vipcore from "../Vip/vip-core/index";
<<<<<<< HEAD
import Vipsign from "../Vip/vip-sign/index";
=======
import VipHomeLog from "../Vip/vip-home-log/index";
import Order from "../Profile/Order/index";
import ConfirmOrder from "../ConfirmOrder/index";
import PlaceOrder from "../PlaceOrder/index";
import Detail from '../Detail';
import './index.less'
>>>>>>> feb6138c8bd5f7a99f8304852e56e04736654486
export default class App extends Component{
    render(){
        return (
            <ConnectedRouter history={history}>
                <div style={{height:'100%'}}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/shoppingCart" component={ShoppingCart}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/list" component={List}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/searchlist" component={SearchList}/>
                    <Route path="/vip" component={Vip}/>
                    <Route path="/vipcore" component={Vipcore}/>
<<<<<<< HEAD
                    <Route path="/vipsign" component={Vipsign}/>


=======
                    <Route path="/viphomelog" component={VipHomeLog}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/confirmorder" component={ConfirmOrder}/>
                    <Route path="/placeorder" component={PlaceOrder}/>
                    <Route path="/detail" component={Detail}/>
>>>>>>> feb6138c8bd5f7a99f8304852e56e04736654486
                    <Tab/>
                </div>
            </ConnectedRouter>
        )
    }
}
