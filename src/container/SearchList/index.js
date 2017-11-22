import React,{Component} from 'react'
import {Route,NavLink} from 'react-router-dom'
import './index.less'
import SearchBar from "../../components/SearchBar/index";
import SearchlistSort from './components/SearchlistSort/index'
import {connect} from 'react-redux'
import actions from '../../store/action/search'
import {upMore} from '../../utils'
import Loading from '../Home/Loading'
@connect(state=>state.search,actions)
export default class SearchList extends Component{
    constructor(){
        super();

        this.state={
            value:'',
            isShow:false
        }
    }
    componentWillMount(){
        let search = this.props.location.search;
        let value = search.slice(search.indexOf('=')+1);
        this.setState({
            value
        })
    }
    componentDidMount(){
        console.log(this.props.message);
        if(this.props.searchList.length===0){
            this.props.searchData();
        }
        // console.log(this.scrollCon);
        upMore(this.scrollCon,this.props.searchData);

        // this.props.searchData();
    }
    handleChange = (value)=>{
        this.setState({
            value
        })
        if(value==''){
            this.props.searchData()
        }
    }
    //排序
    searchByGlobal = ()=>{
        this.props.searchData()
    }
    searchByHot = ()=>{
        this.props.searchByHot()
    }
    searchByPrice = ()=>{
        this.props.searchByPrice()
    }
    //按关键字查找
    searchKey = (value)=>{
        console.log('传进来的key',value)
        this.props.searchData(value)
    }
    render(){
        console.log(this.props.loading);
        return(
            <div>
                <SearchBar value={this.state.value} handleChange={this.handleChange} searchKey={this.searchKey}/>
                <div className='list-content' ref={input=>this.scrollCon=input}>
                    <ul className='list-tab'>
                        <li onClick={this.searchByGlobal}><NavLink to='/searchlist/global'>全球精选</NavLink></li>
                        <li onClick={this.searchByHot}><NavLink to='/searchlist/selltotal'>销量</NavLink></li>
                        <li onClick={this.searchByPrice}><NavLink to='/searchlist/price'>价格</NavLink></li>
                    </ul>
                    {
                        this.props.searchList.length===0 ? <Loading/> : <SearchlistSort dataList={this.props.searchList} loading={this.props.loading}/>
                    }

                    {/*<Loading/>*/}
                </div>
                {
                    (this.props.message && this.state.value!=='')?<div className='msg-tip'>
                        商品还没有哦，正在备货中...
                    </div>:''
                }

            </div>
        )
    }
}
