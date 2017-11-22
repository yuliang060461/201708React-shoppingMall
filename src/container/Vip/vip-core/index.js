import React, {Component} from 'react';
import './index.less'
export default class Vipcore extends Component {
    render() {
        return (
            <div className="vipcore">
                <div className="vip-header">

                    <div className="header-box">
                        <i className="header-box-log"></i>
                    </div>
                    <div className="hig">
                        <div className="hig-s">
                            <span className="hig-s-p">无成长值</span>
                            <span className="s1"></span>
                            <span className="s2"></span>
                            <span className="hig-s-p1">普通会员</span>
                        </div>
                    </div>

                    <p className="text">
                        先去实现一个小目标
                    </p>
                </div>

                <div className="vip-center">
                    <p className="left">积分 <em>5</em></p>
                    <p className="right">成长值 <em>0</em></p>
                </div>

                <div className="vip-bottom">
                    <i className="bottom-p">会员专属权益</i>
                    <div className="bottom-down">
                            <span className="list-down-ls">
                                <i className="iconfont icon-yifahuo"></i>
                                <p>新手特权</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-sousuo"></i>
                                <p>线下特惠</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-fenxiang1"></i>
                                <p>积分加价购</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-xiangji1"></i>
                                <p>全部权益</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-gouwuche"></i>
                                <p>新手特权</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-wode"></i>
                                <p>线下特惠</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-yifahuo"></i>
                                <p>新手特权</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-sousuo"></i>
                                <p>线下特惠</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-fenxiang1"></i>
                                <p>积分加价购</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-xiangji1"></i>
                                <p>全部权益</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-gouwuche"></i>
                                <p>新手特权</p>
                            </span>
                        <span className="list-down-ls">
                                <i className="iconfont icon-wode"></i>
                                <p>线下特惠</p>
                            </span>
                    </div>
                </div>
            </div>
        )
    }
}