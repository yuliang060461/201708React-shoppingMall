import React,{Component} from 'react';
import '../../Register/index.less'
import './index.less'
import Btn from "../../../components/Btn/index";
import actions from '../../../store/action/session'
import {connect} from 'react-redux'
class Account extends Component{
    constructor(){
        super();
        this.state={covPwd:false}
    }
    covPwd=()=>{
        this.setState({covPwd:!this.state.covPwd});
    }
    submit=()=>{
        let usertel=this.usertel.value;
        let password=this.password.value;
        this.props.login({usertel,password});
    }
    render(){
        return (
            <div>
                <div className="input">
                    <i className="iconfont icon-shouji"></i>
                    <input ref={input=>this.usertel=input} type="text" placeholder="手机号"/>
                </div>
                <div className="input">
                    <i className="lock iconfont icon-mima"></i>
                    {this.state.covPwd?<input placeholder="密码" ref={input=>this.password=input} type="text"/>:<input placeholder="密码" ref={input=>this.password=input} type="password"/>}
                    {this.state.covPwd?<i onClick={this.covPwd} className="eyes iconfont icon-zhengyanjing"></i>:<i onClick={this.covPwd} className="eyes iconfont icon-yey2"></i>}


                </div>
                <div className="forget">忘记密码</div>
                <Btn submit={this.submit} title="登录"/>
            </div>
        )
    }
}
export default connect(state=>state.session,actions)(Account)
