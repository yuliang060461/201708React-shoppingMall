import React,{Component} from 'react';
import './index.less'
export default class CheckInput extends Component{
    render(){
        return (
            <div className="input">
                <i className="iconfont icon-yanzhengma"></i>
                <input className="check-input" type="text" placeholder="验证码"/>
                <span className="border"></span>
                <span className="verification">获取验证码</span>
            </div>
        )
    }
}
