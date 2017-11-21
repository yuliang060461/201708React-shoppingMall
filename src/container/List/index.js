import React,{Component} from 'react';
import ListHeader from './ListHeader/index';
import ListBody from './ListBody/index';
export default class Home extends Component{
    render(){
        return (
            <div className="list">
                <ListHeader/>
                <ListBody/>
            </div>
        )
    }
}
