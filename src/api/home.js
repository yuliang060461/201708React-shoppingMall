import {get} from './index';
export function fetchHomeData() {
    return get('/globalselect')
}