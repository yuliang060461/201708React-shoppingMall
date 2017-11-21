import React,{Component} from 'react'
import './index.less'
import {createHashHistory} from 'history'
let history = createHashHistory();

export default class SearchBar extends Component{
    constructor() {
        super();
    }
    handleKeyDown = (e)=>{
        if(e.keyCode===13){
            if(e.target.value){
                history.push('/searchlist?keyword='+e.target.value);
            }
        }
    }
    render(){
        return(
            <div>
                <div className='search-bar'>
                    <span><img src={require('../../images/left.png')} alt=""/></span>
                    <img src={require('../../images/search.png')} alt="" className='search-img'/>
                    <input type="text" className='search-input' onKeyDown={this.handleKeyDown} value={this.props.value} onChange={(e)=>this.props.handleChange(e.target.value)}/>
                </div>
            </div>
        )
    }
}
