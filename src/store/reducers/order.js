/**
 * Created by zhaoyingying on 2017/11/23.
 */
import * as types from '../action-types'
//数组中包含订单状态，订单编号 订单列表

//status:0=>待支付   status:1=》代发货   status:2=》已发货  status:3=》已完成

let initState={
    order:[],
    orderList:null
}

export default function (state=initState,action) {
    switch (action.type){
        case types.FETCH_PAYING:
            //向原有的订单列表中新添加一单
            return {order:[...state.order,...action.payload.order]};
        case types.FETCH_RECEIVER:
            return {...state.order,orderList:{...action.payload}};
        default:
            return state;
    }
}