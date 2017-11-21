import React,{Component} from 'react';
import Viphome from './vip-home/index'
import Vipcore from "./vip-core/index";
export default class Vip extends Component{
    render(){
        return (
            <div>
                <Viphome/>
                {/*<Vipcore/>*/}
            </div>
        )
    }
}