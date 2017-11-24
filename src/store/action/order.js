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
    sendReceiver(orderId,data){
        return dispatch=>{
            fetchReceiver(orderId,data
            ).then(res=>{
                let {code}=res;
                if(code==0){
                    dispatch({
                        type:types.FETCH_RECEIVER,
                        payload:{orderId,data}
                    });
                    dispatch(push('/order'));
                }
            });
        }
    }
}