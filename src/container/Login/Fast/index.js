import React,{Component} from 'react';
import Btn from "../../../components/Btn/index";
export default class Fast extends Component{
    render(){
        return (
            <div className="fast-ligin">
                <div className="input">
                    <i className="iconfont icon-shouji"></i>
                    <input type="text" placeholder="手机号"/>
                </div>
                <div className="input">
                    <i className="iconfont icon-yanzhengma"></i>
                    <input className="check-input" type="text" placeholder="验证码"/>
                    <span className="border"></span>
                    <span className="verification">获取验证码</span>
                </div>
                <Btn title="登录"/>
            </div>
        )
    }
}
