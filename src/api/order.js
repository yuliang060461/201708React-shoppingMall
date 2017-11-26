/**
 * Created by zhaoyingying on 2017/11/23.
 */
import {get,post} from './index'
//获取代付款订单，刚从购物车选好等待支付
export function fetchPaying(name) {
   return get(`/order/${name}`);
}
//向后台发送收货想详细信息
export function fetchReceiver(name,data) {
    return post(`/address/${name}`,data);
}

//让后台状态变为待发货
export function fetchPaid(name) {
    return get(`/paid/${name}`);
}