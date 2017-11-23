import React,{Component} from 'react';
import ListHeader from './ListHeader/index';
import ListBody from './ListBody/index';
import {connect} from 'react-redux';
import actions from '../../store/actions/commodity';

class List extends Component{
    componentDidMount(){
        this.props.getList();
    }
    render(){
        return (
            <div className="list">
                <ListHeader/>
                <ListBody goods = {this.props.list}/>
            </div>
        )
    }
}
export default connect(
    state => state.commodity,//{lesson:0,sliders:[],lessons}
    actions
)(List)
