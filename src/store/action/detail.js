/**
 * Created by L on 2017/11/23.
 */
import * as types from '../action-types';
import {push} from 'react-router-redux'
export default {
    toDetail(good){
        return (dispatch,getState)=>{
            dispatch({
                type: types.SET_DETAIL,
                payload: good
            });
            setTimeout(()=>{
                let {good}=getState().detail;
                if(good){
                    dispatch(push('/detail'))
                }
            },5000)

        }
    }
}