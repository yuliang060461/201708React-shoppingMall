import React,{Component} from 'react';
import OrderContent from "../OrderContent/index";
import NothingFooter from "../../components/NothingFooter/index";
export default class OrderList extends Component{
    render(){
        return (
            <div>
               <OrderContent/>
                <NothingFooter/>
            </div>
        )
    }
}
