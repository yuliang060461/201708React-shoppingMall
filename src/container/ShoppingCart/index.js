import React, {Component} from 'react';
import {connect} from 'react-redux';
import action from '../../store/actions/cart';
import './index.less';
import NoShopping from "./noshop";
import HaveShopping from "./haveShop";
@connect(state => state.cart,action)
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
        this.props.getShopping();
    }
    onEdit = () => {
        this.setState({"isEdit": !this.state.isEdit})
    };
    showList=(e)=>{
        e.preventDefault();
        this.setState({isShowList:!this.state.isShowList});
    }
    //购物车全选
    storeSelect=()=>{
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
        this.props.shoppingCart.dataList.map((item,index)=>item.isBuy=opt);
        this.props.totalCount();
        this.setState({isStoreCheck: opt});
    };
    //触发了一个单选 ，取消全选
    cancelALLSelect=()=>{
        let status=this.props.shoppingCart.dataList.every((item)=>item.checked==this.state.isAllSelect)&&this.state.isStoreCheck==this.state.isAllSelect;
     //   let cancelStatus=this.props.shoppingCart.dataList.every((item)=>item.checked==this.state.isAllSelect);
        this.setState({isAllSelect: status});
        this.props.totalCount();
    };
    cancelStoreSelect=()=>{
        let cancelStatus=this.props.shoppingCart.dataList.every((item)=>item.checked==this.state.isStoreCheck);
        this.setState({isStoreCheck: cancelStatus});
        this.props.totalCount();
    };
    render() {
        return (
            <div className="shoppingCartWrap">
                {
                    this.props.shoppingCart.dataList.length==0? <NoShopping/> :
                        <HaveShopping
                            dataList={this.props.shoppingCart.dataList}
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
