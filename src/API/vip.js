import {get} from './index';
export function fetchVipData() {
    return get('/hotSale')
}