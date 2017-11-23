/**
 * Created by L on 2017/11/20.
 */
import * as types from '../action-types';
import {fetchHomeData,fetchHotHomeData} from '../../api/home'
import {fetchAdd} from '../../api/session'
export default {
    getHomeDate(){
        return (dispatch,getState)=>{
            /*fetchHomeData().then(data=>{
                dispatch({
                    type:types.GETHOMEDATA,
                    payload:data
                })

            })*/
            let {loading,isMore,page} = getState().home;
            if(!loading&&page<=2){
                dispatch({
                    type:types.FETCH_START
                });
                setTimeout(()=>{
                        dispatch({
                            type:types.GETHOMEDATA,
                            payload:fetchHomeData()
                        });
                    }
                    ,1000)

            }
        }

    },
    getHotHomeData(){
        return dispatch=>{
            fetchHotHomeData().then(data=>{
                dispatch({
                    type:types.GETHOTHOMEDATA,
                    payload:data
                })
            })
        }
    },
    goodAdd(good,name){
        return dispatch=>{
            dispatch({
                type:types.ADD_TO_CART,
                payload:fetchAdd(good,name)

            })
        }
    }
}