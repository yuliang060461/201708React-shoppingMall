import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/action/home';
import Slider from './Slider'
import {NavLink} from 'react-router-dom'
import actions2 from '../../store/action/home';
import actions1 from '../../store/action/session';
import {upMore} from '../../utils';
import Market from './Market';
import Global from './Global';
import Dialog from '../../components/Dialog'
import './index.less'
class Home extends Component {
    constructor() {
        super();
        this.state = {
            tab: true
        }
    }

    componentDidMount() {
        if (this.props.home.sliders.length == 0) {
            this.props.getHomeDate();

        }
        upMore(this.refs.content, this.props.getHomeDate);

        this.props.getHotHomeData();

    }

    handleClick = (e)=> {
        if (e.target.innerHTML === '全球精选') {
            this.setState({
                tab: false
            })
        } else if(e.target.innerHTML === '多点超市') {
            this.setState({
                tab: true
            })
        }

    }

    render() {
        let {flag,isShow}=this.props.session;
        return (
            <div className="mall-home">
                {isShow? <Dialog flag={flag} isShow={isShow} removeFlag={this.props.removeFlag}/>:null}
                <div className="home-header" onClick={this.handleClick}>
                    <span className={this.state.tab ? 'active' : ''}>多点超市 <img src={require('../../images/2hours.png')}
                                                                               alt=""/></span>
                    <span className={this.state.tab ? '' : 'active'}>全球精选</span>
                    <NavLink to='/search'><span title='搜索商品' className='R'><i className='iconfont icon-sousuo'></i></span></NavLink>
                </div>

                {
                    this.state.tab ?
                        <div className="content-scroll" ref="content">
                            <Market {...this.props.home}{...this.props.session} goodAdd={this.props.goodAdd} toDetail={this.props.toDetail}/></div>
                        :
                        <div className="content-scroll">
                            <Global {...this.props.home}/>
                        </div>
                }
            </div>
        )
    }
}
export default connect(state=>state, {...actions1,...actions2})(Home)