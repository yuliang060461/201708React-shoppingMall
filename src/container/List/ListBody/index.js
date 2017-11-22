import React,{Component} from 'react';
import './index.less'
export default class ListBody extends Component{
    render(){
        console.log(this.props.goods);
        return (
            <div className="list-body">
                <ol className="list-nav">
                    <li className="list-icon">listlogo</li>
                    <li>全部商品</li>
                    <li className="active">热卖TOP</li>
                    <li>什么值得买</li>
                </ol>
                <p className="list-info">horn 79元免运费/ 59-79仅2元运费</p>
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
            </div>
        )
    }
}
