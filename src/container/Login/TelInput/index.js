import React,{Component} from 'react';
import './index.less'
export default class TelInput extends Component{
    render(){
        return (
            <div>
                <div className="input">
                    <i className="iconfont icon-shouji"></i>
                    <input type="text" placeholder="手机号"/>
                </div>
            </div>
        )
    }
}
