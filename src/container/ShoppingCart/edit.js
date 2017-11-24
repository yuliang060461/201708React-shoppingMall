import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ShoppingList from "./shopList";
import action from '../../store/actions/cart';
import {connect} from 'react-redux';
@connect(state => state,action)
export default class Edit extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="headerTitle">购物车</div>
                    <div onClick={this.props.onEdit} className="headerBtn">编辑</div>
                </div>
                <div className="h70"></div>
                <div className="shoppingCartListBox">
                    <ShoppingList
                        showList={this.props.showList}
                        isShowList={this.props.isShowList}
                        totalCount={this.props.totalCount}
                        isStoreCheck={this.props.isStoreCheck}
                        cancelStoreSelect={this.props.cancelStoreSelect}
                        storeSelect={this.props.storeSelect}
                        isAllSelect={this.props.isAllSelect}
                        delOneShop={this.props.delOneShop}
                        onSub={this.props.onSub}
                        onPlus={this.props.onPlus}
                        checkShop={this.props.checkShop}
                        cancelALLSelect={this.props.cancelALLSelect}
                        onChildAllSelect={this.onChildAllSelect}
                        cartList={this.props.cartList}
                    />
                </div>
                <div className="delShoppingForm">
                    <div className="delFormOpt">
                        <input type="checkbox"
                               checked={this.props.isAllSelect}
                               onChange={this.props.onAllSelect}//按下全选 计算综额 优惠
                               name="allSelect"
                        />
                        <label htmlFor="">全选</label>
                    </div>
                    <Link to='/' className="delFormAdd">加入收藏夹</Link>
                    <button className="delFormBtn" onClick={()=>{
                        this.props.delAllShop();
                        this.props.totalCount()
                    }}>删除</button>
                </div>
                <div style={{height:'120px'}}></div>
            </div>
        )
    }
}
// 加入收藏夹 是个请求 把当前页数据 传入 收藏页；
