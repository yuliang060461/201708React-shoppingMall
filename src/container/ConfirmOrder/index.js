import React,{Component} from 'react';
import HeaderMy from "../../components/Header/index";
import './index.less'
import actions from '../../store/action/order'
import {connect} from 'react-redux'
class ConfirmOrder extends Component{
    constructor(){
        super();
        this.state={show2:false}
    }
    componentDidMount(){
        //刚进来页面就要获取到订单信息
        this.name=this.props.session.user.usertel;
        this.props.getPaying(this.name);

    }
    submitOrder=()=>{
        let receiver=this.receiver.value;
        let receivertel=this.receivertel.value;
        let detailarress=this.detailarress.value;
        let remarks=this.remarks.value;
        this.props.sendReceiver(this.name,this.total,{receiver,receivertel,detailarress,remarks,order:this.props.myOrder})
    }
    render(){
        let order=this.props.myOrder;
        let imgList;
        if(order.length>0){
            imgList=order[order.length-1].cartList.slice(0,4);
            this.total=order[order.length-1].total;
        }
        return (
            <div className="confirm-order">
                <HeaderMy title="订单确认"/>
                <div className="confirm-order-content">
                    <section className="detail-user">
                        <div className="detail-item">
                            <span className="left">联系人</span>
                            <input ref={input=>this.receiver=input} placeholder="请输入收货人姓名" type="text"/>
                        </div>
                        <div className="detail-item">
                            <span className="left">手机号</span>
                            <input ref={input=>this.receivertel=input} placeholder="请输入手机号" type="text"/>
                        </div>
                        <div className="detail-item">
                            <span className="left">地址</span>
                            <span>昌平(地铁站)</span>
                        </div>
                        <div className="detail-item last">
                            <span className="left">详细地址</span>
                            <input ref={input=>this.detailarress=input} placeholder="请输入详细地址"  type="text"/>
                            <i className="iconfont icon-jiantou2-up"></i>
                        </div>
                    </section>
                    <section className="send-style">
                        <div className="send-item first">
                            <p>配送方式</p>
                            <p>多点配送<i className="iconfont icon-gengduo"></i></p>
                        </div>
                        <div className="send-item">
                            <p>配送时间</p>
                            <p>立即送，约19:00送达<i className="iconfont icon-gengduo"></i></p>
                        </div>
                        <div className="send-item">
                            <p>在线支付</p>
                            <i className="iconfont icon-duihao1"></i>
                        </div>
                        <div className="send-item">
                            <p>优惠券/优惠码</p>
                            <p>0张可用<i className="iconfont icon-gengduo"></i></p>
                        </div>
                        <div className="send-item last">
                            <p>备注</p>
                            <input ref={input=>this.remarks=input} placeholder="填写安全存放地址,请按门铃等配送相关要求" type="text"/>
                        </div>
                    </section>
                    <section className="order-price">
                        <div className="title">订单价格</div>
                        <div className="order-price-item">
                            <span>商品价格</span>
                            <span>￥{order.length>0?order[order.length-1].total:0}</span>
                        </div>
                        <div className="order-price-item">
                            <span>促销优惠</span>
                            <span ref={input=>this.cxyh=input}>- ￥0.00</span>
                        </div>
                        <div className="order-price-item">
                            <span>包装费</span>
                            <span ref={input=>this.bzf=input}>+ ￥1.00</span>
                        </div>
                        <div className="order-price-item">
                            <span>包装费减免</span>
                            <span ref={input=>this.bajm=input}>- ￥<span>1.00</span></span>
                        </div>
                        <div className="last">79元免运费/59~79元仅2元运费<i className="iconfont icon-jinggao"></i></div>
                        <div className="actual-payment"><span>实际支付</span><span className="price">￥{order.length>0?order[order.length-1].total:0}</span></div>
                    </section>
                    <section className="order-detail-img">
                        <div>
                            {order.length>0?imgList.map((item,index)=>(<div key={index} className="img-list">
                                <span>1</span>
                                <img src={item.img} alt=""/>
                            </div>)):''}
                        </div>
                        <div className="total"><span>共{order.length>0?order[order.length-1].cartList.length:0}件</span><i className="iconfont icon-gengduo"></i></div>
                    </section>
                    <section className="order-invoice">
                        <span>发票</span>
                        <span>如何开发票</span>
                    </section>
                    <section className="out-stock">
                        <span>如果缺货</span>
                        <div>
                            <span>请选择</span>
                            <i className="iconfont icon-gengduo"></i>
                        </div>
                    </section>
                </div>
                <div className="confirm-order-footer">
                    <p>合计：<span className="symbol">￥</span><span className="num">{order.length>0?order[order.length-1].total:0}</span></p>
                    <button onClick={this.submitOrder}>提交订单</button>
                </div>
            </div>
        )
    }
}
export default connect(state=>({myOrder:state.myOrder.order,session:state.session}),actions)(ConfirmOrder)