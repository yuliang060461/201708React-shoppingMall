/**
 * Created by L on 2017/11/20.
 */
import * as types from '../action-types';
let initState = {
    sliders: [],
    zhuTiLeYuan: {
        titleUrl: '',
        dataList: []
    },
    advertising: [],
    chaoShiYou: {
        titleUrl: '',
        dataList: []
    },
    jzsx: {
        titleUrl: '',
        dataList: []
    },
    shcb: {
        titleUrl: '',
        dataList: []
    },
    loading: false,
    isMore:true,
    page:0


}
export default function (state = initState, action) {
    switch (action.type) {
        case types.FETCH_START:
            return {
                ...state,
                loading: true
            };

        case types.GETHOMEDATA:
            return {
                ...state,
                sliders: [...action.payload.sliders],
                zhuTiLeYuan: {
                    titleUrl: action.payload.zhuTiLeYuan.titleUrl,
                    dataList: [...action.payload.zhuTiLeYuan.dataList]
                },
                advertising: [...action.payload.advertising],
                chaoShiYou: {
                    titleUrl: action.payload.chaoShiYou.titleUrl,
                    dataList: [...action.payload.chaoShiYou.dataList]
                },

                shcb: {
                    titleUrl: action.payload.shengHuoChangBan.titleUrl,
                    dataList: [...action.payload.shengHuoChangBan.dataList]
                },
                jzsx: {
                    titleUrl: action.payload.jiZhiShengXian.titleUrl,
                    dataList: [...state.jzsx.dataList, ...action.payload.jiZhiShengXian.dataList[0].dataList]
                },
                loading: false,
                page:state.page+1

            };
        default :
            return state;
    }
}