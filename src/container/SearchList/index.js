import React,{Component} from 'react'
import {Route,NavLink} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import './index.less'
import SearchBar from "../../components/SearchBar/index";
import SearchlistSort from './components/SearchlistSort/index'
import {connect} from 'react-redux'
import searActions from '../../store/action/search'
import sessActions from '../../store/action/session'
const mapDispatchToProps = (dispatch) => {
    return{
        searActions:bindActionCreators(searActions,dispatch),
        sessActions:bindActionCreators(sessActions,dispatch)
    }
}
import Loading from '../Home/Loading'
@connect(state=>state,mapDispatchToProps)
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
        console.log('合并的actions',this.props.searActions);
        console.log('合并的state',this.props.session);

        if(this.props.search.searchList.length===0){
            this.props.searActions.searchData();
        }
        // console.log(this.scrollCon);
        // upMore(this.scrollCon,this.props.searchData);

        // this.props.searchData();
    }
    handleChange = (value)=>{
        this.setState({
            value
        })
        if(value==''){
            this.props.searActions.searchData()
        }
    }
    //排序
    searchByGlobal = ()=>{
        this.setState({
            value:''
        })
        this.props.searActions.searchData()
    }
    searchByHot = ()=>{
        console.log('热销')
        this.setState({
            value:''
        })
        this.props.searActions.searchByHot()
    }
    searchByPrice = ()=>{
        console.log('价格')
        console.log(this.props.searActions.searchByPrice)
        this.setState({
            value:''
        })
        this.props.searActions.searchByPrice()
    }
    //按关键字查找
    searchKey = (value)=>{
        console.log('传进来的key',value)
        this.props.searActions.searchData(value)
    }

    //添加商品
    goodAdd = (good,name)=>{
        this.props.sessActions.goodAdd(good,name)
    }
    render(){
        console.log(this.props.search.searchList);
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
                        this.props.search.searchList.length===0 ? <Loading/> : <SearchlistSort goodAdd={this.goodAdd} dataList={this.props.search.searchList} loading={this.props.search.loading} session={this.props.session}/>
                    }

                    {/*<Loading/>*/}
                </div>
                {
                    (this.props.search.message && this.state.value!=='')?<div>
                        <div className='dialogBox'>
                            <i className='iconfont icon-chahaozhuanhuan'></i>
                            <div>商品不存在</div>
                        </div>
                    </div>:''
                }

            </div>
        )
    }
}
