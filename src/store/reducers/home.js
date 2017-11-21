/**
 * Created by L on 2017/11/20.
 */
import * as types from '../action-types';
let initState={
    sliders:[],
    zhuTiLeYuan:{
        titleUrl:'',
        dataList:[]
    },
    advertising:[],
    chaoShiYou:{
        titleUrl:'',
        dataList:[]
    },
    jzsx:{
        titleUrl:'',
        dataList:[]
    },
    shcb:{
        titleUrl:'',
        dataList:[]
    }



}
export default function (state = initState, action) {
    switch(action.type){
        case types.GETHOMEDATA:
            return{
                ...state,
                sliders:[...action.payload.sliders],
                zhuTiLeYuan:{
                    titleUrl:action.payload.zhuTiLeYuan.titleUrl,
                    dataList:[...action.payload.zhuTiLeYuan.dataList]
                },
                advertising:[...action.payload.advertising],
                chaoShiYou:{
                    titleUrl:action.payload.chaoShiYou.titleUrl,
                    dataList:[...action.payload.chaoShiYou.dataList]
                },
                jzsx:{
                    titleUrl:action.payload.jiZhiShengXian.titleUrl,
                    dataList:[...state.jzsx.dataList,...action.payload.jiZhiShengXian.dataList[0].dataList]
                },
                shcb:{
                    titleUrl:action.payload.shengHuoChangBan.titleUrl,
                    dataList:[...action.payload.shengHuoChangBan.dataList]
                }



               /* ...state,
                sliders:[...state.sliders,...action.payload[0].dataList],
                panelTitle:{...state.panelTitle,
                    panelTitle1:action.payload[2].dataList[0],
                    panelTitle2:action.payload[5].dataList[0]
                },
                panelBody:{
                    ...state.panelBody,
                    panelBody1:{
                        images:[...state.panelBody.panelBody1,...action.payload[3].dataList]
                    },
                    panelBody2:{
                        images:[...action.payload[6].dataList, ...action.payload[7].dataList,...action.payload[8].dataList]
                    }
                },

                panelBottom:{
                    ...state.panelBottom,
                    images1:action.payload[4].dataList[0]

                }*/
            };
        default :
            return state;
    }
}