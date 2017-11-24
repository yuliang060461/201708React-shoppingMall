import React, {Component} from 'react';
import {connect} from 'react-redux';
import action from '../../store/actions/cart';
import './index.less';
import NoShopping from "./noshop";
import HaveShopping from "./haveShop";
@connect((state) =>state,action)
export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            isShowList:true,
            isAllSelect:false,
            isStoreCheck:false
        }
    }
    componentDidMount() {
        if(this.props.session.user){
            this.props.getShopping(this.props.session.user.usertel);
        }else{
            this.props.noUser();
        }
    }
    onEdit = () => {
        this.setState({"isEdit": !this.state.isEdit})
    };
    showList=(e)=>{
        this.setState({isShowList:!this.state.isShowList});
    }
    //购物车全选
    storeSelect=()=>{
        console.log(this.state.isStoreCheck,'kl;--');
        let newState=!this.state.isStoreCheck;
        this.setState({isStoreCheck:newState});
        this.onChildAllSelect(newState);
    };
    onAllSelect=()=>{
        let newState=!this.state.isAllSelect;
        this.setState({isAllSelect:newState});
        this.onChildAllSelect(newState);
    };
    //列表组件被全选 ()=>{}
    onChildAllSelect=(opt)=>{
        this.props.cart.shoppingCart.cartList.map((item,index)=>item.isShow=opt);
        this.props.totalCount();
        this.setState({isStoreCheck: opt});
    };
    //触发了一个单选 ，取消全选
    cancelALLSelect=()=>{
        let status=this.props.cart.shoppingCart.cartList.every((item)=>item.checked==this.state.isAllSelect)&&this.state.isStoreCheck==this.state.isAllSelect;
        this.setState({isAllSelect: status});
        this.props.totalCount();
    };
    cancelStoreSelect=()=>{
        console.log(this.state.isStoreCheck,'kl;--');
        let cancelStatus=this.props.cart.shoppingCart.cartList.every((item)=>item.checked==this.state.isStoreCheck);
        this.setState({isStoreCheck: cancelStatus});
        this.props.totalCount();
    };
    render() {
        return (
            <div className="shoppingCartWrap">
                {
                    this.props.cart.shoppingCart.cartList.length==0? <NoShopping/> :
                        <HaveShopping
                            cartList={this.props.cart.shoppingCart.cartList}
                            isShowList={this.state.isShowList}
                            isAllSelect={this.state.isAllSelect}
                            isEdit={this.state.isEdit}
                            isStoreCheck={this.state.isStoreCheck}
                            cancelStoreSelect={this.cancelStoreSelect}
                            storeSelect={this.storeSelect}
                            cancelALLSelect={this.cancelALLSelect}
                            onAllSelect={this.onAllSelect}
                            showList={this.showList}
                            onEdit={this.onEdit}
                        />
                }
            </div>
        )
    }
}

//warning.js:33 Warning: A component is changing an uncontrolled in
// put of type checkbox to be controlled. Input elements should not switch
// from uncontrolled to controlled (or vice versa). Decide between using a
// controlled or uncontrolled input element for the lifetime of the component.
// More info: https://fb.me/react-controlled-components
//