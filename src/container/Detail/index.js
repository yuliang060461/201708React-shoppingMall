import React,{Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import actions from '../../store/action/detail'
 class Detail extends Component{
    render(){
        let {id, label,img, lowPrice, name, topPrice}=this.props.good;
        return (
            <div className="detail">
                <div className="detail_head">
                    <i className="iconfont icon-houtui"></i>
                    <i className="iconfont icon-shouye"></i>
                </div>
                <div className="content-scroll">
                    <img className="detail_img" src={img} alt=""/>
                    <div className="detail_body">
                        <p className="name">{name}</p>
                        <div className="detail_desc">
                            <span className="lowPrice">￥{lowPrice}</span>
                            <s className="topPrice">￥{topPrice}</s><span className="label">{label}</span>

                        </div>
                    </div>
                    <h4><i className="iconfont icon-tongzhi"></i> 现在下单，预计明日09:00-10:30送达</h4>

                </div>

                <div className="detail_foot"><i className='iconfont icon-gouwuche'></i><button className="add-btn">加入购物车</button></div>
            </div>
        )
    }
}
export default connect(state=>state.detail,actions)(Detail)