import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.less'
export default class Tab extends Component{
    render(){
        return (
            <nav className="tab">
                <NavLink exact to="#">
                    <i className="iconfont icon-shouye"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="#">
                    <i className="iconfont icon-fenlei"></i>
                    <span>分类</span>
                </NavLink>
                <NavLink to="#">
                    <i className="iconfont icon-huiyuanzhongxin"></i>
                    <span>会员</span>
                </NavLink>
                <NavLink to="/shoppingcart">
                    <i className="iconfont icon-gouwuche"></i>
                    <span>购物车</span>
                </NavLink>
                <NavLink to="/profile">
                    <i className="iconfont icon-wode"></i>
                    <span>我的</span>
                </NavLink>
            </nav>
        )
    }
}
