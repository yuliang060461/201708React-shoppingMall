import {get,post} from './index';
export function getShop() {
    return get('/getBus');
}
export function postOrderData(data) {
    return post('/',data)
}