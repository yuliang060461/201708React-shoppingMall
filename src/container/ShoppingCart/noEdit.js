import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ShoppingList from "./shopList";
import action from '../../store/actions/cart';
import {connect} from 'react-redux';
@connect(state => state, action)
export default class NoEdit extends Component {
    constructor(props) {
        super(props);
    }
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
                    <ShoppingList
                        showList={this.props.showList}
                        isShowList={this.props.isShowList}
                        isStoreCheck={this.props.isStoreCheck}
                        cancelStoreSelect={this.props.cancelStoreSelect}
                        storeSelect={this.props.storeSelect}
                        cancelALLSelect={this.props.cancelALLSelect}
                        onAllSelect={this.props.onAllSelect}
                        isAllSelect={this.props.isAllSelect}
                        totalCount={this.props.totalCount}
                        delOneShop={this.props.delOneShop}
                        onSub={this.props.onSub}
                        onPlus={this.props.onPlus}
                        checkShop={this.props.checkShop}
                        session={this.props.session}
                        cartList={this.props.cartList}
                    />
                    <form action="" className="shoppingCartForm"   style={this.props.isShowList?{"display":'block'}:{"display":'none'}}>
                        <div className="purchasePriceOpt">
                            <input
                                checked={this.props.isAllSelect}
                                type="checkbox"
                                onChange={this.props.onAllSelect}//按下全选 计算综额 优惠
                                name="allSelect"
                            />
                            <label htmlFor="allSelect" className="fb">全选</label>
                        </div>
                        <div className="purchasePrice">
                            <div className="PriceFormEdit">
                                <div className="vm" style={{marginBottom: '10px'}}>
                                    <span className="fb f20">合计：</span>
                                    <span className="price">
                                        {parseFloat(this.props.cart.shoppingCart.total).toFixed(2)}
                                        </span>
                                </div>
                                <div className="vm">
                                    <span className="">总额 ：</span>
                                    <span className="price">
                                          {parseFloat(this.props.cart.shoppingCart.total).toFixed(2)}
                                        </span>
                                    <span className="">优惠:</span>
                                    <span className="price">
                                          {parseFloat(this.props.cart.shoppingCart.cheap).toFixed(2)}
                                        </span>
                                </div>
                            </div>
                            <button type="button" className="pPriceFormBtn"
                                    onClick={()=> this.props.dataTransfer(
                                        this.props.session.user.usertel)}
                            >
                                <span>结算</span> <span>（{this.props.cart.shoppingCart.shopCount}）</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="h50"></div>
            </div>
        )
    }
}
//this.props.session.user.username||