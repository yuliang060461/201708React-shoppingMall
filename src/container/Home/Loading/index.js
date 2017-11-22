/**
 * Created by L on 2017/11/21.
 */
import React,{Component} from 'react';
import './index.less'
export default class Loading extends Component{
    render(){
        return (
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        )
    }
}