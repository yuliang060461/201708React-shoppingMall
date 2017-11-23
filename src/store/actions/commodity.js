import * as types from '../action-types';
import {fetchCommodity} from '../../api/commodity';

export default {
    //获取后台数据
    getList(){
        return (dispatch,getState)=>{
            //派发一个对象，这个对象的payload是一个方法调用的返回值，这个返回值是一个promise,会等待promise完成，完成后会自动再次派发action.这个action的payload值会成为promise的resolve的值
           // let {loading,hasMore,offset,limit} = getState().commodity.goods;
            //只有当目前不是加载中，并且的确有更多数据的话才会加载新的一页数据
                dispatch({
                    type:types.LOAD_GOODS,
                    payload:fetchCommodity()
                });
            /* dispatch({
               type:types.FETCH_LESSONS_FINISH,
               payload:{"hasMore":true,"list":[]}
             })*/
        }
    },
}