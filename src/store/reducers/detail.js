/**
 * Created by L on 2017/11/23.
 */
import * as types from '../action-types';
let initState={
    good:null
};
export default function (state = initState, action) {
    switch (action.type){
        case types.SET_DETAIL:
            return{
                ...state,
                good:{...action.payload}
            };
        default:
            return state;

    }
}