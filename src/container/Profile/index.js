import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'
import actions from '../../store/actions/session'
import {connect} from 'react-redux'
export default class Profile extends Component{
    render(){
        return (
           <div className="profile">
               <section className="profile-header">
                   <div className="my-info">
                       <img className="my-img" src={this.props.user?this.props.user.img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3289761550,697278018&fm=27&gp=0.jpg'} alt=""/>
                       <div className="to-login">
                           <p className="title">Hello,你好</p>
                           <Link to="/login/account" className="to-btn" href="">{this.props.user?'普通会员':'去登录'}</Link>
                       </div>
                   </div>
                   <div className="discount-code">
                   </div>
               </section>
               <section className="my-order-state">
                   <div  className="order">
                       <span className="my-order">我的订单</span>
                       <p className="all-order">全部订单<i className="iconfont icon-gengduo"></i></p>
                   </div>
                   <ul className="order-state">
                       <li className="item-state">
                           <i className="iconfont icon-daizhifu"></i>
                           <span>待支付</span>
                       </li>
                       <li className="item-state">
                           <i className="iconfont icon-daifahuo"></i>
                           <span>待发货</span>
                       </li>
                       <li className="item-state">
                           <i className="iconfont icon-yifahuo"></i>
                           <span>已发货</span>
                       </li>
                   </ul>
               </section>
               <section className="myAssets">
                   <div className="myAssets-title">
                       我的资产
                   </div>
                   <ul className="myAssets-state">
                       <li className="item-myAssets">
                           <span className="item-top">￥0.00</span>
                           <span>余额</span>
                       </li>
                       <li className="item-myAssets">
                           <span className="item-top">0</span>
                           <span>积分</span>
                       </li>
                       <li className="item-myAssets recharge">
                           <span className="item-top">￥0.00</span>
                           <span>卡包</span>
                       </li>
                       <li className="item-myAssets">
                           <span className="item-top">0</span>
                           <span>优惠券</span>
                       </li>
                   </ul>
               </section>
               <section className="myServer">
                   <div className="myServer-title">
                       我的服务
                   </div>
                   <ul className="myServer-list">
                       <li className="myServer-item">
                           <i className="iconfont icon-huiyuanzhongxin"></i>
                           <span>会员中心</span>
                           <span className="item-more">会员有好礼</span>
                       </li>
                       <li className="myServer-item">
                           <i className="iconfont icon-shouhuodizhi"></i>
                           <span>收货地址</span>
                       </li>
                       <li className="myServer-item">
                           <i className="iconfont icon-bangzhuzhongxin"></i>
                           <span>帮助中心</span>
                       </li>
                       <li className="myServer-item">
                           <i className="iconfont icon-kefudianhua"></i>
                           <span>客服电话</span>
                       </li>
                       <li className="myServer-item">
                           <i className="iconfont icon-yunxiazai"></i>
                           <span>体验App</span>
                       </li>
                       <li className="myServer-item">
                           <i className="iconfont icon-activity_fill"></i>
                           <span>发票中心</span>
                       </li>
                       <li className="myServer-item">
                           <i className="iconfont icon-bdb"></i>
                           <span>绑卡</span>
                       </li>
                       <li className="myServer-item ">
                           <i className="iconfont icon-ziyougoushoukuan"></i>
                           <span>自由购</span>
                           <span className="item-more">仅限App使用</span>
                       </li>
                   </ul>
               </section>
           </div>
        )
    }
}
connect(state=>state.session,actions)(Profile)
