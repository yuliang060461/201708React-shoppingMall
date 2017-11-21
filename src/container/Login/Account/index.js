import React,{Component} from 'react';
import '../../Register/index.less'
import './index.less'
import TelInput from "../TelInput/index";
import PasswordInput from "../PasswordInput/index";
import Btn from "../../../components/Btn/index";
import CheckInput from "../CheckInput/index";
export default class Account extends Component{
    render(){
        return (
            <div>
                <div className="input">
                    <i className="iconfont icon-shouji"></i>
                    <input type="text" placeholder="手机号"/>
                </div>
                <div className="input">
                    <i className="lock iconfont icon-mima"></i>
                    <input type="text" placeholder={this.props.text}/>
                    <i className="eyes iconfont icon-zhengyanjing"></i>
                </div>
                <div className="forget">忘记密码</div>
                <Btn title="登录"/>
            </div>
        )
    }
}
