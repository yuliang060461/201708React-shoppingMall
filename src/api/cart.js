import {get,post} from './index';
export function getShop(username) {
    return get('/getBus/'+username);
}
export function postOrderData(data,username) {
    return post('/order/'+username,data)
}