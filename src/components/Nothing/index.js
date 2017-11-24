import React,{Component} from 'react';
import NothingContent from "./NethingContent/index";
import NothingFooter from "../NothingFooter/index";
export default class Nothing extends Component{
    render(){
        return (
            <div>
                <NothingContent/>
                <NothingFooter/>
            </div>
        )
    }
}
