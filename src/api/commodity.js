import {get} from './index';

//向后台请求商品列表的数据
export function fetchCommodity(offset,limit){
    return get(`/commodity`);
}