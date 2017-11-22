import * as types from '../action-types'
import {sortByHot,sortByPrice} from '../../utils'
let initState = {
    searchList:[],
    message:'',
    loading:false
}

export default function(state=initState,action){

    // let hotList = action.payload.dataList.sort(function(a,b){
    //     return a.hot-b.hot;
    // })
    switch(action.type){
        case types.SEARCHSTART:
            return{
                ...state,
                loading:true
            }
        case types.SEARCHDATA:
            return{
                ...state,
                searchList:[...action.payload.dataList],
                message:action.payload.message,
                loading:false
            }
        case types.SEARCHBYHOT:
            return{
                ...state,
                searchList:[...sortByHot(action.payload.dataList)],
                loading:false
            }
        case types.SEARCHBYPRICE:
            return{
                ...state,
                searchList:[...sortByPrice(action.payload.dataList)],
                loading:false
            }
        default:
            return state;
    }
}