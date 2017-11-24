import * as types from '../action-types';
import {getShop,postOrderData} from '../../api/cart';
import {push} from 'react-router-redux';
export default {
    //购物渲染
    getShopping(){
        return dispatch => {
            getShop().then(data => {
                dispatch(
                    {
                        type: types.SHOP_DATA,
                        payload: data
                    }
                )
            });
        }
    },
    //减少购物
    onSub(shop){
        return (dispatch, getState) => {
            dispatch(
                {
                    type: types.DEL_SHOP,
                    payload: {shop}
                }
            )
        }
    },
    //增加购物
    onPlus(shop){
        return (dispatch, getState) => {
            dispatch(
                {
                    type: types.ADD_SHOP,
                    payload: {shop}
                }
            )
        }
    },
    //选中购物
    checkShop(shop){
        return (dispatch, getState) => {
            dispatch(
                {
                    type: types.CHECK_SHOP,
                    payload: {shop}
                }
            )
        }
    },
    //删除购物
    delAllShop(){
        debugger
        return (dispatch, getState) => {
            let data = getState().cart.shoppingCart;
            dispatch(
                {
                    type: types.DEL_ALL_SHOP,
                    payload: data
                }
            )
        }
    },
    //彻底删除某一项
    delOneShop(data){
        debugger
        return (dispatch, getState) => {
            dispatch(
                {
                    type: types.DEL_ONE_SHOP,
                    payload: data
                }
            )
        }
    },
    //计算总额
    totalCount(){
        return {
            type: types.COUNT_AMOUNT
        }
    },
    //数据传递
    dataTransfer(data){
        return dispatch => {
            postOrderData(data).then(payload => {
                dispatch({
                    type: types.DATA_TRANSFER,
                    payload
                });
//                dispatch(push('/'))
            })
        }
    }
}