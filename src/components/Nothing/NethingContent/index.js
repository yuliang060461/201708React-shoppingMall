/**
 * Created by zhaoyingying on 2017/11/23.
 */
import React,{Component} from 'react';
import './index.less'
export default class NothingContent extends Component{
    render(){
        return (
            <div className="content nothing-show">
                <img src={require('../../../images/order-empty.png')} alt=""/>
                <p>近三个月无订单</p>
                <button>去逛逛</button>
            </div>
        )
    }
}
