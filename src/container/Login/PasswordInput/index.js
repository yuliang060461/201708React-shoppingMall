import React,{Component} from 'react';
import './index.less'
export default class PasswordInput extends Component{
    render(){
        return (
            <div className="input">
                <i className="lock iconfont icon-mima"></i>
                <input type="text" placeholder={this.props.text}/>
                <i className="eyes iconfont icon-zhengyanjing"></i>
            </div>
        )
    }
}
