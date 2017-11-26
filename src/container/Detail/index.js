import React,{Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import actions1 from '../../store/action/detail';
import actions2 from '../../store/action/session';
import {Link} from 'react-router-dom';
import {createHashHistory} from 'history';
import Dialog from '../../components/Dialog'
let history = createHashHistory();
 class Detail extends Component{
     goback=()=>{
         history.goBack();
     };
     addToCart=(good,name)=>{
         this.props.goodAdd(good,name)
     };
    render(){
        let {id, label,img, lowPrice, name, topPrice}=this.props.detail.good;
        let username=this.props.session.user?this.props.session.user.usertel:'-1';
        let {flag,isShow}=this.props.session;
        return (
            <div className="detail">
                {isShow? <Dialog flag={flag} isShow={isShow} removeFlag={this.props.removeFlag}/>:null}

                <div className="detail_head">
                    <i className="iconfont icon-houtui" onClick={this.goback}></i>
                    <Link className="iconfont icon-shouye" to="/home"></Link>
                </div>
                <div className="content-scroll">
                    <img className="detail_img" src={img} alt=""/>
                    <div className="detail_body">
                        <p className="name">{name}</p>
                        <div className="detail_desc">
                            <span className="lowPrice">￥{lowPrice}</span>
                                {label?<div><s className="topPrice">￥{topPrice}</s><span className="label">{label}</span></div>:null}
                        </div>
                    </div>
                    <h4><i className="iconfont icon-tongzhi"></i> 现在下单，预计明日09:00-10:30送达</h4>

                </div>

                <div className="detail_foot"><Link className='iconfont icon-gouwuche' to='/shoppingCart'></Link><button className="add-btn" onClick={()=>this.addToCart(this.props.detail.good,username)}>加入购物车</button></div>
            </div>
        )
    }
}
export default connect(state=>state,{...actions1,...actions2})(Detail)