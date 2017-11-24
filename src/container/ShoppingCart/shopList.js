import React, {Component} from 'react';
export default class ShoppingList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="shoppingCartList_tag">多点商城</div>
                <div className="shoppingCartList_store">
                    <input type="checkbox"
                           checked={this.props.isStoreCheck}
                           onChange={()=>{
                               this.props.storeSelect();
                               this.props.cancelALLSelect();
                           } }
                    />
                    马驹桥店
                    <div className="shoppingCartList_storeTag" onClick={this.props.showList}>
                        <img src={require('../../images/arrow.png')} alt=""/>
                    </div>
                </div>
                <div className="activity">
                    <div className="activityInfo">
                        <img src={require('../../images/active.png')} alt=""/>
                        优惠活动
                    </div>
                </div>
                <ul className="shoppingCartList"
                    style={this.props.isShowList?{"display":'block'}:{"display":'none'}}>
                    {this.props.cartList.map((item,index)=>(
                        <li className="shoppingItem" key={item.id}>
                            <input
                                   checked={item.isShow}
                                   onChange={()=>{
                                       this.props.checkShop(item);
                                       this.props.cancelALLSelect();
                                       this.props.cancelStoreSelect();
                                       this.props.totalCount();
                                   }}
                                   className="shoppingInfoOpt"
                                   name="onChildAllSelect"
                                   type="checkbox"/>
                            <div className="shoppingImg">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="shoppingInfoBox">
                                <p className="shoppingInfo">{item.name}</p>
                                <div className="shoppingPrice">
                                    <span>￥{item.topPrice||null} </span>
                                    <del>{item.lowPrice||null}</del>
                                </div>
                                <div className="shoppingNum">
                                    <div className="shoppingSub" onClick={()=>{
                                        this.props.onSub(item);
                                  //      this.props.delOneShop(item);
                                        this.props.totalCount();
                                    }}>
                                        -
                                    </div>
                                    <input type="text" value={item.number}/>
                                    <div className="shoppingPlus" onClick={()=>{
                                        this.props.onPlus(item);

                                        this.props.totalCount();
                                    }} >
                                        +
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
