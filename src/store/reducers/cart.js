let init=[];
import * as types from '../action-types'
import action from '../actions/cart'
export default function (state=init, action) {
    if(types.ADD_SHOP){
        return state;
    }
    return state;
}
