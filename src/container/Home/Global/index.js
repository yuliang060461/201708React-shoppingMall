import React,{Component} from 'react';
import Slider from '../Slider';
export default class Global extends Component{
    render(){
        return (
            <div>
                <Slider sliders={this.props.hSliders}/>
                {this.props.hSliders.length > 0 ?
                    <div className="pannel">
                        <div className="active1">
                            <section className='goods-list'>
                                <ul>
                                    <li>
                                        <img
                                            src="https://img.dmallcdn.com/mIndex/201711/c1d7fd2f-aff5-4a6d-995d-a321c54f9add_240x240H"
                                            alt=""/>
                                        <span>新鲜果蔬</span>
                                    </li>
                                    <li>
                                        <img
                                            src="https://img.dmallcdn.com/mIndex/201709/79e6f359-dafa-436f-92b0-e3de97fd245e_240x240H"
                                            alt=""/>
                                        <span>安心肉蛋</span>
                                    </li>
                                    <li>
                                        <img
                                            src="https://img.dmallcdn.com/mIndex/201709/8d951fd1-755a-41cc-ae72-75728e4ede4a_240x240H"
                                            alt=""/>
                                        <span>冰鲜水产</span>
                                    </li>
                                    <li>
                                        <img
                                            src="https://img.dmallcdn.com/mIndex/201711/4bf05fec-d46d-41aa-ae8a-34d4192c1f10_240x240H"
                                            alt=""/>
                                        <span>休闲食品</span>
                                    </li>
                                    <li>
                                        <img
                                            src="https://img.dmallcdn.com/mIndex/201709/c8420324-9344-4c9e-a9f3-d66d8ab02eab_240x240H"
                                            alt=""/>
                                        <span>奶饮熟食</span>
                                    </li>
                                    <li>
                                        <img
                                            src="https://img.dmallcdn.com/mIndex/201709/74aec7ba-91f0-4425-ab38-0db84d8e0ae3_240x240H"
                                            alt=""/>
                                        <span>粮油速食</span>
                                    </li>
                                    <li>
                                        <img
                                            src="https://img.dmallcdn.com/mIndex/201709/e48e722b-9974-4e9c-90f9-1e4a82d02911_240x240H"
                                            alt=""/>
                                        <span>酒水饮料</span>
                                    </li>
                                    <li>
                                        <img
                                            src="https://img.dmallcdn.com/mIndex/201709/77737979-08c9-431c-8297-de29290723ef_240x240H"
                                            alt=""/>
                                        <span>母婴用品</span>
                                    </li>
                                    <li>
                                        <img
                                            src="https://img.dmallcdn.com/mIndex/201709/4cf7e200-fbaa-46e2-9458-901bbfde6ec2_240x240H"
                                            alt=""/>
                                        <span>清洁洗护</span>
                                    </li>
                                    <li>
                                        <img
                                            src="https://img.dmallcdn.com/mIndex/201709/9593e538-f716-4b98-9228-a7d515735586_240x240H"
                                            alt=""/>
                                        <span>日用百货</span>
                                    </li>
                                </ul>
                            </section>
                            <section className="ztly">
                                <div className="panel-title"><img src={this.props.zhuTiLeYuan.titleUrl}
                                                                  alt=""/>
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
                                <div className="panel-title"><img src={this.props.chaoShiYou.titleUrl}
                                                                  alt=""/>
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
                                <div className="panel-title"><img src={this.props.shcb.titleUrl} alt=""/>
                                </div>
                                <ul className="panel-body">
                                    {this.props.shcb.dataList.map((item, index)=>
                                        <li key={index}><img src={item.imageUrl} alt=""/></li>
                                    )
                                    }
                                </ul>
                            </section>
                            <section className="jzsx">
                                <div className="panel-title"><img src={this.props.jzsx.titleUrl} alt=""/>
                                </div>
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
                    </div> : null}
            </div>
        )
    }
}/**
 * Created by L on 2017/11/21.
 */
