import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import {createHashHistory} from 'history'
let history = createHashHistory();
export default class HeaderMy extends Component{
    goback=()=>{
        history.goBack();
    }
    render(){
        return (
            <div className="myHeader">
                <i onClick={this.goback} className="iconfont icon-houtui"></i>
                <span>{this.props.title}</span>
                <Link className="beizhu" to='/register'>{this.props.beizhu}</Link>
            </div>
        )
    }
}
