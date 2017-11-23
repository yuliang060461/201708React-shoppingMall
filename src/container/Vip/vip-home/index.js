import React, {Component} from 'react';
import './index.less';
import qd from '../images/qiandao.png';
import {Link} from 'react-router-dom'
export default class Viphome extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        console.log(this.props);

      let sliders=this.props.slider.sliders||[];
        return (
            <div className="vip-header">
                <div className="vip-header-up">
                    <h3 className="hello">Hello,普通会员</h3>
                    <div className="conent">
                        <div className="left">
                            <div className="left-s">
                                <span className="crown"></span>
                                <span  className="crowmP">
                                    <Link to="/vipcore">会员中心</Link>
                                </span>
                            </div>

                        </div>
                        <div className="right">
                            <div className="right-s">
                                <em className="log">立享优惠</em>
                                <span className="code"></span>
                                <span className="codeP">
                                    <Link to="/VipHomeLog">会员专属</Link>
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
                                <i className="iconfont icon-fenxiang1"></i>
                                <p>新手特权</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-kefu"></i>
                                <p>线下特惠</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-duigou"></i>
                                <p>积分加价购</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-tianjia"></i>
                                <p>全部权益</p>
                            </span>
                    </div>
                </div>
                <div className="vip-down">
                    {/*<ul className="vip-downs">
                     <li className="vip-down-ls">
                     <img src={xx1} alt=""/>
                     </li>
                     </ul>*/}
                    <ul className="vip-downs">
                        {
                           sliders.map((item, index) => (
                                <li className="vip-down-ls" key={index}>
                                    <img src={item.imageUrl} alt=""/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="give">
                    <img src={qd} alt=""/>
                </div>
            </div>

        )
    }
}