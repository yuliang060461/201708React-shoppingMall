import React,{Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './index.less'
export default class ListBody extends Component{
    constructor(){
        super();
        this.state={hideShow:false}
    }
    getHideList = () => (
        <CSSTransition
            timeout={1000}
            classNames="fade"
        >
            <div className="hide-list">
                <div className="hide-title">
                    <span className="title-left">全部分类</span>
                    <span className="title-right" onClick={() => this.setState({hideShow: !this.state.hideShow})}>取消</span>
                </div>
                <ul className="list-left">
                    <li className="active">推荐商品</li>
                    <li>蔬菜水果</li>
                    <li>肉蛋水产</li>
                    <li>粮油散货</li>
                    <li>熟食素食</li>
                    <li>牛奶冰品</li>
                    <li>啤酒饮料</li>
                    <li>休闲小食</li>
                    <li>母音天地</li>
                    <li>纸品清护</li>
                    <li>美容细化</li>
                    <li>家常用品</li>
                    <li>美容细化</li>
                    <li>家常用品</li>
                </ul>
                <ul className="list-middle">
                    <li className="active">新鲜水果</li>
                    <li>蔬菜果蔬</li>
                </ul>
                <ul className="list-right">
                    <li className="active">国产水果</li>
                    <li>进口水果</li>
                </ul>
            </div>
        </CSSTransition>
    )
    render(){
        console.log(this.props.goods);
        return (
            <div className="list-body">
                <ol className="list-nav">
                    <li className="list-icon"></li>
                    <li onClick={() => this.setState({hideShow: !this.state.hideShow})}>全部商品</li>
                    <li className="active">热卖TOP</li>
                    <li>什么值得买</li>
                </ol>
                <p className="list-info"> 79元免运费/ 59-79仅2元运费</p>
                <ul className="goods-list">
                    {this.props.goods.length>0?
                        this.props.goods.map((item, index) => (
                            <li className="good-each" key={index}>
                                <img src={item.url} className="img-url"/>
                                <span className="good-seal">特价</span>
                                <p className="good-info">{item.title}</p>
                                <p className="good-detail">
                                    <span className="good-price">{item.price}</span>
                                    <span className="good-add">+</span>
                                </p>

                            </li>
                        )):null
                    }
                </ul>
                <TransitionGroup>
                {
                    this.state.hideShow?this.getHideList()
                        :null
                }
                </TransitionGroup>
            </div>
        )
    }
}
