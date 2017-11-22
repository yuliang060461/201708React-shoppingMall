import {get} from './index';
export function fetchHomeData() {
    return get('/duodianchaoshi')
}
export function fetchHotHomeData(){
    return  get('/hotSale')
}