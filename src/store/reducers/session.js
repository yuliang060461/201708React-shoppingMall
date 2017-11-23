import * as types from '../action-types'
let initState={
    user:null,
    code:null,
    message:null
}
export default function (state=initState,action) {
    switch (action.type){
        case types.FETCH_REGISTER:
            return {...state,...action.payload};
        case types.FETCH_LOGIN:
            return action.payload;

        case types.ADD_TO_CART:
            return action.payload;

        case types.VALIDATE:
            return action.payload;
        case types.LOGIN_OUT:
            return {...initState};
        case types.UPDATE_PWD:
            return {...state,...action.payload};

        default:
            return state;
    }
}
