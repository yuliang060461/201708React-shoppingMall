/**
 * Created by zhaoyingying on 2017/11/23.
 */
import React,{Component} from 'react';
import HeaderMy from "../../../components/Header/index";
import {Route,NavLink,Link} from 'react-router-dom'
import './index.less'
import Nothing from "../../../components/Nothing/index";
import OrderList from "../../OrderList/index";
import {get} from '../../../api/index'
import {connect} from 'react-redux'
import OrderContent from "../../OrderContent/index";
import NothingFooter from "../../../components/NothingFooter/index";
 class Order extends Component{
     constructor(){
         super();
         this.state={allOrder:[],oldOrder:[]}
     }
    componentDidMount(){
        this.name=this.props.user.usertel;
        get(`/start/${this.name}`,).then(res=>{this.setState({allOrder:res});});
    }
    handleClick=(e)=>{
        let name=this.props.user.usertel;
        let id=e.target.dataset.id;

        if(id==1){
            get(`/load/${this.name}`,).then(res=>{this.setState({allOrder:res});});
        }
        if(id==2){
            get(`/start/${this.name}`,).then(res=>{this.setState({allOrder:res});});
        }
        if(id==3){
            get(`/over/${this.name}`,).then(res=>{this.setState({allOrder:res});});
        }
    }
    render(){
        return (
            <div className="order">
                <HeaderMy title="全部订单"/>
                <div className="nav-list" onClick={this.handleClick}>
                    <NavLink data-id="1" to="/order/all">全部</NavLink>
                    <NavLink data-id="2" to="/order/paymenting">待支付</NavLink>
                    <NavLink data-id="3" to="/order/shipping">待发货</NavLink>
                    <NavLink data-id="4" to="/order/shipped">已发货</NavLink>
                    <NavLink data-id="5" to="/order/completed">已完成</NavLink>
                </div>
                {this.state.allOrder.length?<div><OrderContent allOrder={this.state.allOrder}/><NothingFooter/></div>:<Nothing/>}
            </div>
        )
    }
}
export default connect(state=>state.session)(Order)