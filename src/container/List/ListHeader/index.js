import React,{Component} from 'react';
import logo from '../../../../mock/images/list-logo.png';
import './index.less';

export default class ListHeader extends Component{
    render(){
        return (
            <div className="list-header">
                <span className="list-search"><i className="iconfont icon-sousuo"/></span>
                <img src={logo} className="list-logo"/>
                <p className="list-address"><span className="text">多点超市（北京回龙观物美店）</span><span className="more"></span></p>
            </div>
        )
    }
}
