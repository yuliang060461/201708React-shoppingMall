/**
 * Created by zhaoyingying on 2017/11/21.
 */
import {fetchRegister,fetchLogin,fetchValidate,fetchLoginout,fetchUpdatePwd,fetchAdd} from '../../api/session'
import * as types from '../action-types'
import {push} from 'react-router-redux'
export default {
    //注册行为
    register(user){
        return dispatch=>{
            fetchRegister(user).then(payload=>{
                dispatch({
                    type:types.FETCH_LOGIN,
                    payload
                });
                let {code} =payload
                if(code==0){
                    dispatch(push('/login/account'));
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
                    dispatch(push('/profile'))
                }
            });
        }
    },

    //验证用户是否登录
    validate(){
        return dispatch=>{
            fetchValidate().then(payload=>{
                dispatch({
                    type:types.VALIDATE,
                    payload
                });
            });
        }
    },


    //用户退出
    loginOut(){
        return dispatch=>{
            fetchLoginout().then(payload=>{
                let {code}=payload;
                if(code==0){
                    dispatch({
                        type:types.LOGIN_OUT,
                        payload:{user:null,code:null,code:null}
                    });
                }
            });
        }
    },
    //修改用户密码
    updatePwd(user){
        return display=>{
            fetchUpdatePwd(user).then(payload=>{
                let {code}=payload;
                if(code==0){
                   display({
                       type:types.UPDATE_PWD,
                       payload
                   });
                }
            });
        }
    },
    //添加购物车
    goodAdd(good,name){
        return dispatch=>{
            dispatch({
                type:types.ADD_TO_CART,
                payload:fetchAdd(good,name)

            })
        }
    },
    //清除显示
    removeFlag(){
        return{
            type:types.REMOVE_FLAG
        }
    }

}