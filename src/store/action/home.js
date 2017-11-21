/**
 * Created by L on 2017/11/20.
 */
import * as types from '../action-types';
import {fetchHomeData,fetchHotHomeData} from '../../api/home'
export default {
    getHomeDate(){
        return dispatch=>{
            fetchHomeData().then(data=>{
                dispatch({
                    type:types.GETHOMEDATA,
                    payload:data
                })

            })
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
    }
}