/**
 * Created by zhaoyingying on 2017/11/23.
 */
import React,{Component} from 'react';
import HeaderMy from "../../../components/Header/index";
import {Route,NavLink,Link} from 'react-router-dom'
import './index.less'
import Nothing from "../../../components/Nothing/index";
import OrderList from "../../OrderList/index";
export default class Order extends Component{
    render(){
        return (
            <div className="order">
                <HeaderMy title="全部订单"/>
                <div className="nav-list">
                    <NavLink to="/order/all">全部</NavLink>
                    <NavLink to="/order/paymenting">待支付</NavLink>
                    <NavLink to="/order/shipping">待发货</NavLink>
                    <NavLink to="/order/shipped">已发货</NavLink>
                    <NavLink to="/order/completed">已完成</NavLink>
                </div>
                <OrderList/>
            </div>
        )
    }
}
