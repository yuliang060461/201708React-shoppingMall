import * as types from '../action-types';
let initState = {
    slider: []
};
export default function (state = initState, action) {
    console.log(action);
    switch (action.type) {
        case types.VIP_DATA:
            return {
                ...state,
                slider: action.data
            };
        default:
            return state
    }


}