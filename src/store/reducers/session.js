import * as types from '../action-types'
let initState={
    user:null,
    code:null,
    message:null,
    flag:null,
    isShow:false
}
export default function (state=initState,action) {
    switch (action.type){
        case types.FETCH_REGISTER:
            return {...state,...action.payload};
        case types.FETCH_LOGIN:
            return {...state,...action.payload};

        case types.ADD_TO_CART:
            return {
                ...state,
                isShow:true,
                flag:action.payload
            };
        case types.REMOVE_FLAG:
            return{
                ...state,
                isShow:false,
                flag:null
            };

        case types.VALIDATE:
            return {...state,...action.payload};
        case types.LOGIN_OUT:
            return {...initState};
        case types.UPDATE_PWD:
            return {...state,...action.payload};

        default:
            return state;
    }
}
