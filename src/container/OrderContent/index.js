/**
 * Created by zhaoyingying on 2017/11/23.
 */
import React,{Component} from 'react';
import './index.less'
export default class OrderContent extends Component{
    
    render(){
        return (
            <div className="content">
                <ul className="order-list">
                    <li className="item">
                        <div className="title">
                            <div className="title1">
                                <img src={require('../../images/order4.png')} alt=""/>
                                <span>昌平品超市</span>
                            </div>
                            <span>待支付</span>
                        </div>
                        <div className="item-content">
                            <div className="order-img">
                                <img src={require('../../images/oder1.jpg')} alt=""/>
                                <img src={require('../../images/oder2.jpg')} alt=""/>
                                <img src={require('../../images/oder3.jpg')} alt=""/>
                            </div>
                            <div className="order-num">
                                <span>...共7件</span>
                                <i className="iconfont icon-gengduo"></i>
                            </div>
                        </div>
                        <div className="item-footer">
                            <p>实付款：￥121.90</p>
                            <div>
                                <button>联系客服</button>
                                <button className="gopay">去支付</button>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="title">
                            <div className="title1">
                                <img src={require('../../images/order4.png')} alt=""/>
                                <span>昌平品超市</span>
                            </div>
                            <span>待支付</span>
                        </div>
                        <div className="item-content">
                            <div className="order-img">
                                <img src={require('../../images/oder1.jpg')} alt=""/>
                                <img src={require('../../images/oder2.jpg')} alt=""/>
                                <img src={require('../../images/oder3.jpg')} alt=""/>
                            </div>
                            <div className="order-num">
                                <span>...共7件</span>
                                <i className="iconfont icon-gengduo"></i>
                            </div>
                        </div>
                        <div className="item-footer">
                            <p>实付款：￥121.90</p>
                            <div>
                                <button>联系客服</button>
                                <button className="gopay">去支付</button>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="title">
                            <div className="title1">
                                <img src={require('../../images/order4.png')} alt=""/>
                                <span>昌平品超市</span>
                            </div>
                            <span>待支付</span>
                        </div>
                        <div className="item-content">
                            <div className="order-img">
                                <img src={require('../../images/oder1.jpg')} alt=""/>
                                <img src={require('../../images/oder2.jpg')} alt=""/>
                                <img src={require('../../images/oder3.jpg')} alt=""/>
                            </div>
                            <div className="order-num">
                                <span>...共7件</span>
                                <i className="iconfont icon-gengduo"></i>
                            </div>
                        </div>
                        <div className="item-footer">
                            <p>实付款：￥121.90</p>
                            <div>
                                <button>联系客服</button>
                                <button className="gopay">去支付</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
