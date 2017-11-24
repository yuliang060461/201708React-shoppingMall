import * as types from '../action-types';
let init = {
    shoppingCart: {
        total:0,
        cheap:0,
        shopCount:0,
        dataList: []
    }
};
//初始化购物车名称
export default function (state = init, action) {
    switch (action.type) {
        case types.SHOP_DATA:
            var countData = action.payload.dataList.filter((item, index) => item.isBuy == true);
            return {...state, shoppingCart: {
                total: countData.map((item, index) => item.num * item.lowPrice),
                cheap: countData.map((item, index) => item.num * (item.topPrice-item.lowPrice)),
                shopCount:action.payload.dataList.filter((item, index) => item.isBuy == true).length,
                dataList: action.payload.dataList
                }
            }
        case types.ADD_SHOP:
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    dataList: [
                        ...state.shoppingCart.dataList.map((item, index) => {
                            if (item.id == action.payload.shop.id) {
                                item.num = item.num + 1;
                            }
                            return item
                        })
                    ]
                }
            };
        case types.DEL_SHOP:
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    dataList: [
                        ...state.shoppingCart.dataList.map((item, index) => {
                            if (item.id == action.payload.shop.id) {
                                if (item.num<1) {
                                    item.num=1;
                                    item.isBuy=false;
                                 }
                                }
                            return item
                        })
                    ]
                }
            };
        case types.CHECK_SHOP:
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    dataList: [
                        ...state.shoppingCart.dataList.map((item, index) => {
                            if (item.id == action.payload.shop.id) {
                                item.isBuy = !item.isBuy;
                            }
                            return item
                        })
                    ]
                }
            };
        case types.DEL_ALL_SHOP:
            let data = action.payload.dataList.filter((item, index) => item.isBuy == false);
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    dataList: data
                }
            };
        case types.COUNT_AMOUNT:
            var countData = state.shoppingCart.dataList.filter((item, index) => item.isBuy == true);
            let t=0; let c=0;let l=countData.length;
            let tAry=countData.map((item, index) =>item.num * parseFloat(item.lowPrice).toFixed(2));
            let cAry=countData.map((item, index) =>item.num * parseFloat(item.topPrice-item.lowPrice).toFixed(2));
            tAry.forEach((item,index)=>t+=item);
            cAry.forEach((item,index)=>t+=item);
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    total:t,
                    cheap:c,
                    shopCount:l
                }
            };
        case types.DEL_ONE_SHOP:
            let delOneData = state.shoppingCart.dataList.filter((item,index) =>item!==action.payload);
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    dataList: delOneData
                }
            };
        case types.DATA_TRANSFER:
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    dataList: action.payload.dataList.filter((item,index)=>item.isBuy=true)
                }
            };
            default:
            return state;
    }
}
