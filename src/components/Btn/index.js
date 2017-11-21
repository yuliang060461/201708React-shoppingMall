import React,{Component} from 'react';
import './index.less'
export default class Btn extends Component{

    render(){
        return (
            <button onClick={this.props.submit} className="btn">{this.props.title}</button>
        )
    }
}
