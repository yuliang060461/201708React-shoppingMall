import {get} from './index'

export function searchData(key){
    if(key){
        return get('/search?str='+key)
    }else{
        return get('/search')
    }

}