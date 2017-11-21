import React,{Component} from 'react';
import TelInput from "../TelInput/index";
import CheckInput from "../CheckInput/index";
import Btn from "../../../components/Btn/index";
export default class Fast extends Component{
    render(){
        return (
            <div className="fast-ligin">
                <TelInput/>
                <CheckInput/>
                <Btn title="登录"/>
            </div>
        )
    }
}
