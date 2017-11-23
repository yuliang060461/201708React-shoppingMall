/*create by zhuang on 2017/11/22*/
import * as types from '../action-types'

let initState={

      loading: '',//加载状态 加载中
      hasMore: true,//后面是否有更多
      list: [],  //存放着课程的数组
      offset: 0, //偏移量
      limit: 6   //每页的条数

};

export default function (state=initState,action) {
    switch (action.type){
        case types.LOAD_GOODS:
            return {
                    ...state,
                loading: '加载中',
                list:[...state.list, ...action.payload.list]

            };
        default :
            return state;
    }
}
