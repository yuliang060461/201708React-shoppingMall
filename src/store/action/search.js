import * as types from '../action-types'
import {searchData} from '../../api/search'
export default {
    searchData(key){
        return dispatch=>{
            dispatch({
                type:types.SEARCHSTART
            })
            setTimeout(()=>{
                if(key){
                    dispatch({
                        type:types.SEARCHDATA,
                        payload:searchData(key)
                    })
                }else{
                    dispatch({
                        type:types.SEARCHDATA,
                        payload:searchData()
                    })
                }

            },500)

        }
    },
    searchByHot(){
      return dispatch=>{
          searchData().then(data=>{
              dispatch({
                  type:types.SEARCHBYHOT,
                  payload:data
              })
          })
      }
    },
    searchByPrice(){
        return dispatch=>{
            searchData().then(data=>{
                dispatch({
                    type:types.SEARCHBYPRICE,
                    payload:data
                })
            })
        }
    }
}