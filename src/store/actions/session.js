/**
 * Created by zhaoyingying on 2017/11/21.
 */
import {fetchRegister,fetchLogin,fetchAdd} from '../../api/session'
import * as types from '../action-types'
export default {
    //注册行为
    register(user){
        return dispatch=>{
            fetchRegister(user).then(payload=>{
                dispatch({
                    type:types.FETCH_LOGIN,
                    payload
                });
                if(payload.code==0){
                    dispatch.push('/profile');
                }
            });
        }
    },
    //登录行为
    login(user){
        return dispatch=>{
            fetchLogin(user).then(payload=>{
                dispatch({
                    type:types.FETCH_LOGIN,
                    payload
                });
                if(payload.code==0){
                    dispatch.push('/profile')
                }
            });
        }
    },
}