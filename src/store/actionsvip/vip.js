import * as types from '../action-types';
import {fetchVipData} from '../../api/vip'
//获取图片列表
export default {
    getVipData(){
        return dispatch=>{
            fetchVipData().then(data=>{
                dispatch({
                    type:types.VIP_DATA,
                    data
                })
            })
        }
    }
}