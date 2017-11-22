import React,{Component} from 'react';
import Slider from '../Slider';
import Loading from '../Loading';
import LazyLoad from 'react-lazyload'
export default class Home extends Component{
    render(){
        return (
            <div>
                <div className="scroller">
                    <Slider sliders={this.props.sliders}/>
                    {this.props.sliders.length > 0 ?
                        <div className="pannel">
                            <div className="active1">
                                <section className="ztly">
                                    <div className="panel-title"><LazyLoad height={1000}><img src={this.props.zhuTiLeYuan.titleUrl}
                                                                      alt=""/></LazyLoad>
                                    </div>


                                    <div className="panel-body panel-body-1-2">
                                        <a className="col-6 row-1" href=""><LazyLoad height={1000}><img
                                            src={this.props.zhuTiLeYuan.dataList[0].imageUrl} alt=""/></LazyLoad></a>
                                        <span className="col-6 row-1">
                                        <a className="row-2" href=""><LazyLoad height={1000}><img
                                            src={this.props.zhuTiLeYuan.dataList[1].imageUrl} alt=""/></LazyLoad></a>
                                        <a className="row-2" href=""><LazyLoad height={1000}><img
                                            src={this.props.zhuTiLeYuan.dataList[2].imageUrl} alt=""/></LazyLoad></a>
                                    </span>

                                    </div>
                                </section>
                                <section className="cx_img">
                                    <a href=''><img src={this.props.advertising[0].imageUrl} alt=""/></a>
                                </section>
                                <section className="csyx">
                                    <div className="panel-title"><img src={this.props.chaoShiYou.titleUrl}
                                                                      alt=""/>
                                    </div>
                                    <ul className="panel-body panel-body-3-3">
                                        {this.props.chaoShiYou.dataList.map((item, index)=><li
                                            className="col-3"
                                            key={index}>
                                            <img src={item.imageUrl} alt=""/></li>)}
                                    </ul>
                                </section>
                                <section className="cx_img">
                                    <a href=''><img src={this.props.advertising[1].imageUrl} alt=""/></a>
                                </section>
                                <section className="shcb">
                                    <div className="panel-title"><img src={this.props.shcb.titleUrl}
                                                                      alt=""/></div>
                                    <ul className="panel-body">
                                        {this.props.shcb.dataList.map((item, index)=>
                                            <li key={index}><img src={item.imageUrl} alt=""/></li>
                                        )
                                        }
                                    </ul>
                                </section>
                                <section className="jzsx">
                                    <div className="panel-title"><img src={this.props.jzsx.titleUrl}
                                                                      alt=""/></div>
                                    <ul className="panel-body panel-body-3-3">
                                        {this.props.jzsx.dataList.map((item, index)=><li className="col-3"
                                                                                         key={index}>
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
                        </div>
                        : null}
                </div>
                {
                    this.props.loading ?
                        <Loading/> : this.props.page <= 2 ? null : <div
                        className="load-status">
                        已经到底了哦！
                    </div>
                }
            </div>
        )
    }
}