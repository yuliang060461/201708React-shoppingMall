import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/action/home';
import Slider from './Slider';
import Loading from './Loading';
import {upMore} from '../../utils'
import './index.less'
class Home extends Component {
    componentDidMount() {
        if(this.props.sliders.length==0){
        this.props.getHomeDate();
        }
        upMore(this.refs.content,this.props.getHomeDate)
    }

    render() {
        console.log(this.props.loading,this.props.page);
        return (
            <div className="mall-home">
                <div className="home-header">
                    <span>多点超市 <img src={require('../../images/2hours.png')} alt=""/></span>
                    <span>全球精选</span>
                </div>
                <div className="content-scroll"  ref="content">
                    <div className="scroller">
                    <Slider sliders={this.props.sliders}/>
                    <div className="pannel">
                            {this.props.sliders.length > 0 ? <div className="active1">
                                <section className="ztly">
                                    <div className="panel-title"><img src={this.props.zhuTiLeYuan.titleUrl} alt=""/>
                                    </div>

                                    <div className="panel-body panel-body-1-2">
                                        <a className="col-6 row-1" href=""><img
                                            src={this.props.zhuTiLeYuan.dataList[0].imageUrl} alt=""/></a>
                                        <span className="col-6 row-1">
                                        <a className="row-2" href=""><img
                                            src={this.props.zhuTiLeYuan.dataList[1].imageUrl} alt=""/></a>
                                        <a className="row-2" href=""><img
                                            src={this.props.zhuTiLeYuan.dataList[2].imageUrl} alt=""/></a>
                                    </span>
                                    </div>
                                </section>
                                <section className="cx_img">
                                    <a href=''><img src={this.props.advertising[0].imageUrl} alt=""/></a>
                                </section>
                                <section className="csyx">
                                    <div className="panel-title"><img src={this.props.chaoShiYou.titleUrl} alt=""/>
                                    </div>
                                    <ul className="panel-body panel-body-3-3">
                                        {this.props.chaoShiYou.dataList.map((item, index)=><li className="col-3"
                                                                                               key={index}>
                                            <img src={item.imageUrl} alt=""/></li>)}
                                    </ul>
                                </section>
                                <section className="cx_img">
                                    <a href=''><img src={this.props.advertising[1].imageUrl} alt=""/></a>
                                </section>
                                <section className="shcb">
                                    <div className="panel-title"><img src={this.props.shcb.titleUrl} alt=""/></div>
                                    <ul className="panel-body">
                                        {this.props.shcb.dataList.map((item, index)=>
                                            <li key={index}><img src={item.imageUrl} alt=""/></li>
                                        )
                                        }
                                    </ul>
                                </section>
                                <section className="jzsx">
                                    <div className="panel-title"><img src={this.props.jzsx.titleUrl} alt=""/></div>
                                    <ul className="panel-body panel-body-3-3">
                                        {this.props.jzsx.dataList.map((item, index)=><li className="col-3" key={index}>
                                            <img src={item.img} alt=""/>
                                            <div>
                                                <div className="good-desc">
                                                    <span className="title">{item.name}</span>
                                                    <s className="pre-price">{item.topPrice ? '￥' + item.topPrice : ''}</s>
                                                    <span className="price">￥{item.lowPrice}</span>
                                                </div>
                                                {item.label.length > 0 ?
                                                    <div className="tj_label">{item.label}</div> : null}
                                                <div className="add-btn">+</div>
                                            </div>
                                        </li>)}
                                    </ul>
                                </section>
                            </div>
                             :null}
                        </div>
                        {
                            this.props.loading ?
                                <Loading/> : this.props.page<=2 ? null :  <div
                                className="load-status">
                                已经到底了哦！
                            </div>
                        }
                    </div>


                </div>

            </div>
        )
    }
}
export default connect(state=>state.home, actions)(Home)