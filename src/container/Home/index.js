import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/action/home';
import Slider from './Slider'
import './index.less'
class Home extends Component {
    constructor(){
        super();
        this.state={
            tab:true
        }
    }
    componentDidMount() {
        this.props.getHomeDate();
    }
    handleClick = (e)=>{
        if(e.target.innerHTML==='全球精选'){
           this.setState({
               tab:false
           })
       }else{
            this.setState({
                tab:true
            })
        }

    }
    render() {
        return (
            <div className="mall-home">
                <div className="home-header" onClick={this.handleClick}>
                    <span>多点超市 <img src={require('../../images/2hours.png')} alt=""/></span>
                    <span>全球精选</span>
                </div>
                {
                    this.state.tab? <div className="content-scroll">
                        11
                        <Slider sliders={this.props.sliders}/>
                        {this.props.sliders.length > 0 ?
                            <div className="pannel">
                                <div className="active1">
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
                            </div> : null}
                    </div> :  <div className="content-scroll">
                        2
                        <Slider sliders={this.props.sliders}/>
                        {this.props.sliders.length > 0 ?
                            <div className="pannel">
                                <div className="active1">
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
                            </div> : null}
                    </div>
                }
                <div className="content-scroll">
                    <Slider sliders={this.props.sliders}/>
                    {this.props.sliders.length > 0 ?
                        <div className="pannel">
                            <div className="active1">
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
                        </div> : null}
                </div>
            </div>
        )
    }
}
export default connect(state=>state.home, actions)(Home)