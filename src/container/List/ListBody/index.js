import React,{Component} from 'react';
import './index.less'
export default class ListBody extends Component{
    render(){
        return (
            <div className="list-body">
                <ol className="list-nav">
                    <li className="list-icon">listlogo</li>
                    <li>全部商品</li>
                    <li>热卖TOP</li>
                    <li>什么值得买</li>
                </ol>
                <p className="list-info">horn 79元免运费/ 59-79仅2元运费</p>
                <ul className="goods-list">
                    <li className="good-each">
                        <img src=""/>
                        <span className="good-seal">特价</span>
                        <p className="good-info">三元特价牛奶三元特价牛奶</p>
                        <p className="good-detail">
                            <span className="good-price">￥ </span>
                            <span className="good-add">+</span>
                        </p>

                    </li>
                    <li className="good-each">
                        <img src=""/>
                        <span className="good-seal">特价</span>
                        <p className="good-info">三元特价牛奶三元特价牛奶</p>
                        <p className="good-detail">
                            <span className="good-price">￥ </span>
                            <span className="good-add">+</span>
                        </p>

                    </li>
                    <li className="good-each">
                        <img src=""/>
                        <span className="good-seal">特价</span>
                        <p className="good-info">三元特价牛奶三元特价牛奶</p>
                        <p className="good-detail">
                            <span className="good-price">￥ </span>
                            <span className="good-add">+</span>
                        </p>

                    </li>
                </ul>
            </div>
        )
    }
}
