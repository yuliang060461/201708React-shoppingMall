/**
 * Created by zhaoyingying on 2017/11/23.
 */
import {fetchPaying,fetchReceiver} from '../../api/order'
import * as types from '../action-types'
import {push} from 'react-router-redux'
export default {
    getPaying(name){
        return dispatch=>{
            fetchPaying(name).then(payload=>{
                dispatch({
                    type:types.FETCH_PAYING,
                    payload
                });
            })
        }
    },
    sendReceiver(name,data){
        return dispatch=>{
            fetchReceiver(name,data).then(payload=>{
                dispatch({
                    type:types.FETCH_RECEIVER,
                    payload,
                });
                dispatch(push('/order'));
            });
        }
    }
}