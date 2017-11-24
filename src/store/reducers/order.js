/**
 * Created by zhaoyingying on 2017/11/23.
 */
import * as types from '../action-types'
//数组中包含订单状态，订单编号 订单列表
//status:-1 代下单
//status:0=>待支付   status:1=》代发货   status:2=》已发货  status:3=》已完成

let initState={
    order:[]
}

export default function (state=initState,action) {
    switch (action.type){
        case types.FETCH_PAYING:
            //向原有的订单列表中新添加一单
            return {order:[...state.order,...action.payload]};
        case types.FETCH_RECEIVER:
            let order=state.order.map((item)=>{
                if(item.orderId==action.payload.orderId){
                    return {...item,...action.payload.data,status:0}
                }else {
                    return item;
                }
            });
            return {order:order};
        default:
            return state;
    }
}