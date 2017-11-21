import React,{Component} from 'react'
import {createHashHistory} from 'history'
import {NavLink} from 'react-router-dom'
import './index.less'
import SearchBar from "../../components/SearchBar/index";
let history = createHashHistory();
export default class Search extends Component{
    constructor(){
        super();
        this.state = {
            value:''
        }
    }
    handleClick = (e)=>{
      // console.log(e.target.innerHTML);
        this.setState({
            value:e.target.innerHTML
        })
        console.log(e.target.innerHTML);
        // this.searchInput.focus();
    }
    handleChange =(value)=>{
       this.setState({
           value
       })
    }
    render(){
        return(
            <div>
                <SearchBar value={this.state.value} handleChange={this.handleChange}/>
                <div className='search-content'>
                    <div className='search-hot'>
                        <p className='clearfix'>
                            <span className='L light-gray'>热门搜索</span>
                            <span className='R'>全球精选</span>
                        </p>
                        <ul>
                            <li onClick={this.handleClick}>饺子</li>
                            <li>饭盒</li>
                            <li>面粉</li>
                            <li>婴儿湿巾</li>
                            <li>方便面</li>
                            <li>饺子</li>
                            <li>饭盒</li>
                            <li>面粉</li><li>饺子</li>
                            <li>饭盒</li>
                            <li>面粉</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
