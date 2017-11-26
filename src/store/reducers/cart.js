import * as types from '../action-types';
let init = {
    shoppingCart: {
        total: 0,
        cheap: 0,
        shopCount: 0,
        cartList: []
    }
};
//初始化购物车名称
export default function (state = init, action) {
    switch (action.type) {
        case types.SHOP_DATA:
            var countData = action.payload.cartList.filter((item, index) => item.isShow == true);
            var t = 0;
            var c = 0;
            var l = countData.length;
            var tAry = countData.map((item, index) => item.number * item.topPrice);
            var cAry = countData.map((item, index) => item.number * (item.lowPrice - item.topPrice));
            tAry.forEach((item, index) => t += item);
            cAry.forEach((item, index) => c += item);
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    total: t,
                    cheap: c,
                    shopCount: l,
                    cartList: action.payload.cartList
                }
            }
        case types.ADD_SHOP:
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    cartList: [
                        ...state.shoppingCart.cartList.map((item, index) => {
                            if (item.id == action.payload.shop.id) {
                                item.number = item.number + 1;
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
                    cartList: [
                        ...state.shoppingCart.cartList.map((item, index) => {
                            if (item.id == action.payload.shop.id) {
                                if (item.number <= 1) {
                                    item.number = 1;
                                    item.isShow = false;
                                }
                                else {
                                    item.number = item.number - 1
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
                    cartList: [
                        ...state.shoppingCart.cartList.map((item, index) => {
                            if (item.id == action.payload.shop.id) {
                                item.isShow = !item.isShow;
                            }
                            return item
                        })
                    ]
                }
            };
        case types.DEL_ALL_SHOP:
            let data = action.payload.cartList.filter((item, index) => item.isShow == false);
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    cartList: data
                }
            };
        case types.COUNT_AMOUNT:
            var countData = state.shoppingCart.cartList.filter((item, index) => item.isShow == true);
            var t = 0;
            var c = 0;
            var l = countData.length;
            var tAry = countData.map((item, index) => item.number * parseFloat(Number(item.topPrice)).toFixed(2));
            var cAry = countData.map((item, index) => item.number * parseFloat(Number(item.lowPrice) - Number(item.topPrice)).toFixed(2));
            tAry.forEach((item, index) => t += item);
            cAry.forEach((item, index) => c += item);
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    total: t,
                    cheap: c,
                    shopCount: l
                }
            };
        case types.DEL_ONE_SHOP:
            let delOneData = state.shoppingCart.cartList.filter(
                (item, index) =>
                    !(item == action.payload && item.number == 1 && item.isShow == false)
            );
            return {

                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    cartList: delOneData
                }
            };
        case types.DATA_TRANSFER:
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    order: [
                        {
                            ...state.shoppingCart.order,
                            cartList: action.payload.order[0].cartList.filter(
                                (item, index) => item.isShow == true
                            )
                        }
                    ]
                }
            };
        default:
            return state;
    }
}
//   case types.DEL_ONE_SHOP:
//let delOneData = state.shoppingCart.cartList.filter((item,index) =>item!==action.payload);
//return {
//  ...state,
//shoppingCart: {
//  ...state.shoppingCart,
//cartList: delOneData
//}
//};
//
//
//
//
//
//
// /