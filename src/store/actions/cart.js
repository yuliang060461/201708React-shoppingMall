import * as types from '../action-types'

export default {
    function(data){
        return{
            type:types.ADD_SHOP,
            payload:data
        }
    }
}