import React,{Component} from 'react';
import './index.less'
import HeaderMy from "../../components/Header/index";
import Account from "./Account/index";
import Fast from "./Fast/index";
import {NavLink,Route} from 'react-router-dom'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

export default class Login extends Component{
    constructor(){
        super();
        this.state={fast:false}
    }
    select=(e)=>{
        if(e.target.className=='left-span'||e.target.className=='right-span'){
            this.setState({fast:!this.state.fast});
        }
    }
    render(){
        return (
            <div className="loign-my">
                <HeaderMy title="欢迎来到多点商城" beizhu="注册"/>
                <img src="http://img.dmallcdn.com/common/964135f3-19de-4ab7-a9ba-512b10acd452_750H" alt=""/>
                <div className="type-select" onMouseOver={this.select}>
                    <NavLink to="/login/account" className='left-span'>密码账号登录</NavLink>
                    <i className="iconfont icon-shouhuodizhi"></i>
                    <NavLink to="/login/fast" className='right-span'>手机快捷登录</NavLink>
                </div>

                <Route path="/login/account" component={Account}/>
                <Route path="/login/fast" component={Fast}/>
            </div>
        )
    }
}
