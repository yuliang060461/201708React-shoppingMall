/**
 * Created by zhaoyingying on 2017/11/21.
 */
import React,{Component} from 'react';
import HeaderMy from "../../components/Header/index";
import './index.less'
import actions from '../../store/action/session'
import {connect} from 'react-redux'
 class UpdatePwd extends Component{
    constructor() {
        super();
        this.state = {error: false}
    }

    confirm=()=>{
        let password=this.newPwd.value;
        let usertel=this.props.user.usertel;
        let oldPassword=this.props.user.password;
        let oldPwd=this.oldPwd.value;
        if(oldPwd==oldPassword){
            this.props.updatePwd({usertel,password});
            this.props.cancel();
        }else {
            this.setState({
                error:true
            });
            this.oldPwd.value='';
        }

    }
    render(){
        return (
            <div className="updatePwd">
                <div className="pwd">旧密码：<input ref={input=>this.oldPwd=input} className="oldPwd" type="text"/></div>
                <div className="pwd">新密码：<input ref={input=>this.newPwd=input} className="newPwd" type="text"/></div>
                <div className="updatePwd-btn">
                    <a onClick={this.confirm} href="javascript:;">确认</a><a onClick={()=>{this.props.cancel()}} href="javascript:;">取消</a>
                </div>
                {this.state.error?<div className="new-old" style={{color:'red'}}>旧密码输入不正确,请重新输入</div>:null}
            </div>
        )
    }
}
export default connect(state=>state.session,actions)(UpdatePwd)
