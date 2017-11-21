import React, {Component} from 'react';
import './index.less';
import xx1 from '../../images/xx.jpg';
import xx2 from '../../images/ss.jpg';
import yw from '../../images/yw.jpg';
import qd from '../../images/qiandao.png';
export default class Viphome extends Component {
    render() {
        return (
            <div className="vip-header">
                <div className="vip-header-up">
                    <h3 className="hello">Hello,普通会员</h3>
                    <div className="conent">
                        <div className="left">
                            <div className="left-s">
                                <span className="crown"></span>
                                <span className="crowmP">会员中心</span>
                            </div>

                        </div>
                        <div className="right">
                            <div className="right-s">
                                <em className="log">立享优惠</em>
                                <span className="code"></span>
                                <span className="codeP">会员专属
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="list-upbar">
                        <div className="list-up">
                            <span className="list-ls money">
                                <em>￥0.00</em>
                                <p>金额</p>
                            </span>
                            <span className="list-ls points">
                                <em>5</em>
                                <p>积分</p>
                            </span>
                            <span className="list-ls  comeon">
                                <em>0</em>
                                <p>成长值</p>
                            </span>
                            <span className="list-ls coupon">
                                <em>1</em>
                                <p>优惠券</p>
                            </span>
                        </div>
                    </div>
                    <div className="list-down">
                            <span className="list-down-ls">
                                <i className="iconfont icon-evaluate"></i>
                                <p>新手特权</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-selectionfill"></i>
                                <p>线下特惠</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-sponsor"></i>
                                <p>积分加价购</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-more_light"></i>
                                <p>全部权益</p>
                            </span>
                    </div>
                </div>
                <div className="vip-down">
                    <ul className="vip-downs">
                        <li className="vip-down-ls">
                            <img src={xx1} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={xx2} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={yw} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={xx1} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={xx2} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={yw} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={xx1} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={xx2} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={yw} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={xx1} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={xx2} alt=""/>
                        </li>
                        <li className="vip-down-ls">
                            <img src={yw} alt=""/>
                        </li>

                    </ul>
                </div>
                <div className="give">
                    <img src={qd} alt=""/>
                </div>
            </div>

        )
    }
}