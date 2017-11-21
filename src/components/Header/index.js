import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
export default class HeaderMy extends Component{
    render(){
        return (
            <div className="myHeader">
                <i className="iconfont icon-houtui"></i>
                <span>{this.props.title}</span>
                <Link className="beizhu" to='/register'>{this.props.beizhu}</Link>
            </div>
        )
    }
}
