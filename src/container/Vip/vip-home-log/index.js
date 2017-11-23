import React, {Component} from 'react';
import './index.less'
import bj from '../images/bbbbb.jpg'
export default class VipHomeLog extends Component {
    render() {
        return (
            <div className="viphomelog">
                vip-log
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
                            下载App立享98折
                        </button>
                    </div>
                    <div className="xxx">
                        <i className="iconfont icon-shanchu
 xxxs"></i>
                    </div>
                </div>
            </div>
        )
    }
}