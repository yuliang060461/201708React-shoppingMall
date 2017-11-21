import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import action from '../../store/actions/cart';
import './index.less';
@connect(state => state.cart, action)
export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "isEdit": false,
            shoppingCart: [
                {

                    "hasMore": true,
                    "shoppingList": [
                        {
                            "id": 1,
                            "product": "牛奶",
                            "price": 190,
                            "own_num": 1,
                            "shopping_num": 1,
                            "preferential": "",
                            "other": ""
                        },
                        {
                            "id": 1,
                            "product": "牛奶",
                            "price": 190,
                            "own_num": 1,
                            "shopping_num": 1,
                            "preferential": "",
                            "other": ""
                        }
                    ]
                }
            ]
        }
    }
    componentDidMount() {

    }
    onEdit = () => {
        this.setState({"isEdit": !this.state.isEdit})
    }
    render() {
        return (
            <div className="shoppingCartWrap">
                {
                    this.state.shoppingCart.length == 0 ? <NoShopping/> :
                        <HaveShopping isEdit={this.state.isEdit} onEdit={this.onEdit}/>
                }
            </div>
        )
    }
}
class NoShopping extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="headerTitle">购物车</div>
                </div>
                <div className="noShoppingContent">
                    <img className="" src={require('../../images/cart_emtry.png')} alt=""/>
                    <p>忙碌了一天，还是买买买最开心</p>
                    <div className="noShoppingLink">
                        <Link to="/">去逛逛</Link>
                    </div>
                </div>
            </div>
        )
    }
}
class HaveShopping extends Component {
    render() {
        return (
            <div>
                {
                    this.props.isEdit ? <Edit onEdit={this.props.onEdit}/>:
                        <NoEdit onEdit={this.props.onEdit}/>
                }
            </div>
        )
    }
}
class Edit extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="headerTitle">购物车</div>
                    <div onClick={this.props.onEdit} className="headerBtn">编辑</div>
                </div>
                <div className="h70"></div>
                <div className="shoppingCartListBox">
                    <ShoppingList/>
                </div>
                <div className="delShoppingForm">
                    <div className="delFormOpt">
                        <input type="radio"/>
                        <label htmlFor="">全选</label>
                    </div>
                    <button className="delFormAdd">加入收藏夹</button>
                    <button className="delFormBtn">删除</button>
                </div>
                <div style={{height:'120px'}}></div>
            </div>
        )
    }
}
class NoEdit extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="headerReturn">&lt;</div>
                    <div className="headerTitle">购物车</div>
                    <div onClick={this.props.onEdit} className="headerBtn">管理</div>
                </div>
                <div className="h70"></div>
                <div className="shoppingCartAddr clearfix">
                    <span className="fl">收货地址</span>
                    <span className="fr"> <Link to="/path">&gt;</Link></span>
                </div>
                <div className="shoppingCartListBox">
                    <ShoppingList/>
                    <form action="" className="shoppingCartForm">
                        <div className="purchasePriceOpt">
                            <input type="radio" name="allSelect"/>
                            <label htmlFor="allSelect" className="fb">全选</label>

                        </div>
                        <div className="purchasePrice">
                            <div className="PriceFormEdit">
                                <div className="vm" style={{marginBottom: '10px'}}>
                                    <span className="fb f20">合计：</span>
                                    <span className="price">11111111111111111</span>
                                </div>
                                <div className="vm">
                                    <span className="">总额 ：</span>
                                    <span className="price">11111</span>
                                    <span className="">优惠:</span>
                                    <span className="price">0.111</span>
                                </div>
                            </div>
                            <button className="pPriceFormBtn">
                                <span>结算</span> <span>（length）</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="h50"></div>

            </div>
        )
    }
}
class ShoppingList extends Component {
    render() {
        return (
            <div>
                <div className="shoppingCartList_tag">多点商城</div>
                <div className="shoppingCartList_store">
                    <input type="radio"/>
                    马驹桥店
                </div>
                <div className="activity">

                    <div className="activityInfo">
                        <img src={require('../../images/active.png')} alt=""/>
                        优惠活动
                    </div>

                </div>
                <ul className="shoppingCartList">
                    <li className="shoppingItem">
                        <input className="shoppingInfoOpt" type="radio"/>
                        <div className="shoppingImg">
                            <img
                                src="https://img.alicdn.com/imgextra/i1/TB1IkJ5RXXXXXXZXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
                                alt=""/>
                        </div>
                        <div className="shoppingInfoBox">
                            <p className="shoppingInfo">升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶</p>
                            <div className="shoppingPrice">
                                ￥1111111
                            </div>
                            <div className="shoppingNum">
                                <button className="shoppingSub">-</button>
                                <input type="text" value="10000"/>
                                <button className="shoppingPlus">+</button>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="shoppingCartList">
                    <li className="shoppingItem">
                        <input className="shoppingInfoOpt" type="radio"/>
                        <div className="shoppingImg">
                            <img
                                src="https://img.alicdn.com/imgextra/i1/TB1IkJ5RXXXXXXZXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
                                alt=""/>
                        </div>
                        <div className="shoppingInfoBox">
                            <p className="shoppingInfo">升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶</p>
                            <div className="shoppingPrice">
                                ￥1111111
                            </div>
                            <div className="shoppingNum">
                                <button className="shoppingSub">-</button>
                                <input type="text" value="10000"/>
                                <button className="shoppingPlus">+</button>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="shoppingCartList">
                    <li className="shoppingItem">
                        <input className="shoppingInfoOpt" type="radio"/>
                        <div className="shoppingImg">
                            <img
                                src="https://img.alicdn.com/imgextra/i1/TB1IkJ5RXXXXXXZXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
                                alt=""/>
                        </div>
                        <div className="shoppingInfoBox">
                            <p className="shoppingInfo">升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶升入牛奶</p>
                            <div className="shoppingPrice">
                                ￥1111111
                            </div>
                            <div className="shoppingNum">
                                <button className="shoppingSub">-</button>
                                <input type="text" value="10000"/>
                                <button className="shoppingPlus">+</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

/*

class NoEditA extends Component {
    render() {
        console.log(this.props.isEdit, '****************');
        return (
            <div>
                {
                    this.props.isEdit ? "Edit" : 'noEdit'
                }
                <div className="header">
                    {
                        this.props.isEdit ?
                            <div className="headerTitle">购物车</div>
                            + <div onClick={this.onEdit} className="headerBtn">编辑</div> :
                            <div className="headerReturn">&lt;</div>
                            + <div className="headerTitle">购物车</div>
                            + <div onClick={this.onEdit} className="headerBtn">管理</div>

                    }
                </div>
                <div className="h70"></div>
                {
                    this.props.isEdit ? '' : <div className="shoppingCartAddr clearfix">
                        <span className="fl">收货地址</span>
                        <span className="fr"> <Link to="/path">&gt;</Link></span>
                    </div>
                }

                <div className="shoppingCartListBox">
                    <ShoppingList/>
                    {
                        this.props.isEdit ? "" : <form action="" className="shoppingCartForm">
                            <div className="purchasePriceOpt">
                                <input type="radio" name="allSelect"/>
                                <label htmlFor="allSelect" className="fb">全选</label>

                            </div>
                            <div className="purchasePrice">
                                <div className="PriceFormEdit">
                                    <div className="vm" style={{marginBottom: '10px'}}>
                                        <span className="fb f20">合计：</span>
                                        <span className="price">11111111111111111</span>
                                    </div>
                                    <div className="vm">
                                        <span className="">总额 ：</span>
                                        <span className="price">11111</span>
                                        <span className="">优惠:</span>
                                        <span className="price">0.111</span>
                                    </div>
                                </div>
                                <button className="pPriceFormBtn">
                                    <span>结算</span> <span>（length）</span>
                                </button>
                            </div>
                        </form>
                    }

                </div>
                {
                    this.props.isEdit ? <div className="delShoppingForm">
                        <div className="delFormOpt">
                            <input type="radio"/>
                            <label htmlFor="">全选</label>
                        </div>

                        <button className="delFormAdd">加入收藏夹</button>
                        <button className="delFormBtn">删除</button>
                    </div> : ''
                }
            </div>
        )
    }
}

*/
