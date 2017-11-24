import {get,post,del} from './index';
export function getShop(username) {
    return get('/getBus/'+username);
}

export function postOrderData(data,username) {
    return post('/order/'+username,data)
}

export function delShop(data,username) {
    return del('/deleteBus/'+username,data)
}
