import React, {Component} from 'react';
import './index.less';
import qd from '../images/qiandao.png';
import bj from '../images/er.png'
import {Link} from 'react-router-dom'
export default class Viphome extends Component {
    constructor() {
        super();
        this.state = {isShow: false}
    }

    getHomelog = () => {
        this.setState({isShow: !this.state.isShow})
    }

    render() {
        console.log(this.props);
        let sliders = this.props.slider.sliders || [];
        return (
            <div className="vip-header">
                <div className="vip-header-h">
                    <div className="vip-header-up">
                        <h3 className="hello">Hello,普通会员</h3>
                        <div className="conent">
                            <div className="left">
                                <div className="left-s">
                                    <span className="crown"></span>
                                    <span className="crowmP">
                                    <Link to="/vipcore">会员中心</Link>
                                </span>
                                </div>

                            </div>
                            <div className="right">

                                <div onClick={this.getHomelog}>
                                    <div className="right-s">

                                        <em className="log">立享优惠</em>

                                        <div>
                                            <span className="code"></span>
                                            <span className="codeP">
                                    会员专属
                                    </span>

                                        </div>


                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="give" onClick={this.getHomelog}>
                            <img className="gives" src={qd} alt=""/>
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
                        <ul className="vip-downs">
                            <li className="vip-down-ls">
                                {/*<img src={xx1}/>*/}
                            </li>
                        </ul>
                        <ul className="vip-downs">
                            {
                                sliders.map((item, index) => (



                                    <li className="vip-down-ls" key={index}>

                                        <Link   to={{pathname:'/detailvip',state:item}} >
                                        <img src={item.imageUrl} alt=""/>

                                        </Link>

                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                </div>

                {
                    this.state.isShow ? <div className="viphomelog">
                        <div className="logbg">
                            <div className="log">
                                <div className="log-f">
                                    <img src={bj} alt="" className="log-bar"/>
                                </div>
                                <p className="log-up">
                                    对不起 TT-TT <br/>
                                    我们暂时关闭了微信商城的扫码功能.</p>
                                <p className="log-down">
                                    因为，我们决定玩个大的！！！<br/>
                                    即日起，新同学用“多点app”首次扫码立享98折哦！
                                    老朋友用“多点app”线下扫码 享随机折扣 最高免单！！！

                                </p>
                                <button className="btn">
                                    关注微信优惠更多
                                </button>
                            </div>

                            <button className="xxx" onClick={this.getHomelog}>
                                X
                            </button>
                        </div>
                    </div> : null
                }

            </div>
        )
    }
}