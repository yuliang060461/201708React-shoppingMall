import * as types from '../action-types'
let initState={
    user:null,
    code:null,
    message:null
}
export default function (state=initState,action) {
    switch (action,type){
        case types.FETCH_REGISTER:
            return action.payload;
        case types.FETCH_LOGIN:
            return action.payload;
        default:
            return state;
    }
}
