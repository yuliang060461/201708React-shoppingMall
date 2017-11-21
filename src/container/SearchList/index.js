import React,{Component} from 'react'
import {Route,NavLink} from 'react-router-dom'
import './index.less'
import SearchBar from "../../components/SearchBar/index";
import SearchlistSort from './components/SearchlistSort/index'
export default class SearchList extends Component{
    constructor(){
        super();

        this.state={
            value:''
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

    }
    handleChange = (value)=>{
        this.setState({
            value
        })
    }
    render(){

        return(
            <div>
                <SearchBar value={this.state.value} handleChange={this.handleChange}/>
                <div className='list-content'>
                    <ul className='list-tab'>
                        <li><NavLink to='/searchlist/global'>全球精选</NavLink></li>
                        <li><NavLink to='/searchlist/selltotal'>销量</NavLink></li>
                        <li><NavLink to='/searchlist/price'>价格</NavLink></li>
                    </ul>
                    <Route path='/searchlist/:sort' component={SearchlistSort}/>
                </div>
            </div>
        )
    }
}
