import React,{Component} from 'react';
import './index.less'
import HeaderMy from "../../components/Header/index";
import TelInput from "../Login/TelInput/index";
import CheckInput from "../Login/CheckInput/index";
import PasswordInput from "../Login/PasswordInput/index";
import Btn from "../../components/Btn/index";
import actions from '../../store/action/session'
import {connect} from 'react-redux'
class Register extends Component{
    constructor(){
        super();
        this.state={count:60,liked:true,message:null};
    }
    handleClick=()=>{
        if(this.state.liked){
            this.num=parseInt(Math.random() * 9000 + 1000);
            this.setState({...this.state,liked:false},()=> {
                this.timer=window.setInterval(()=>{
                    let count=this.state.count;
                    count-=1;
                    this.setState({...this.state,count:count});
                    if(count<1){
                        window.clearInterval(this.timer);
                        this.setState({...this.state,liked:true});
                        this.num=null;
                    }
                },1000)
            });
        }
    }
    submit=()=>{
        let usertel=this.usertel.value;
        let userCheck=this.usercheck.value;
        let password=this.password.value;
        console.log(usertel, password);
        if(this.num&&this.num==userCheck){
            this.props.register({usertel,password});
        }else {
            this.setState({...this.state,message:'验证码错误,请重新发送'});
        }

    }
    render(){
        return (
            <div className="register">
                <HeaderMy title="注册"/>
                <div className="welcome">欢迎来到多点</div>
                <div className="input">
                    <i className="iconfont icon-shouji"></i>
                    <input ref={input=>this.usertel=input} type="text" placeholder="手机号"/>
                </div>
                <div className="input">
                    <i className="iconfont icon-yanzhengma"></i>
                    <input ref={input=>this.usercheck=input} className="check-input" type="text" placeholder="验证码"/>
                    <span className="border"></span>
                    <span onClick={this.handleClick} className="verification">{this.state.liked?'获取验证码':this.state.count+'秒后重发'}</span>
                </div>
                {this.num?<div style={{color:'green',padding:"5px 0"}}>验证码是：{this.num}</div>:null}
                <div className="input">
                    <i className="lock iconfont icon-mima"></i>
                    <input ref={input=>this.password=input} type="text" placeholder={this.props.text}/>
                    <i className="eyes iconfont icon-zhengyanjing"></i>
                </div>
                {this.state.message?<div>{this.state.message}</div>:null}
                <br/>
                <Btn title="提交" submit={this.submit}/>
            </div>


        )
    }
}
export default connect(state=>state.session,actions)(Register)