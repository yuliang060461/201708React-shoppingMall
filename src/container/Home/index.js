import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import actions from '../../store/action/home';
import {upMore} from '../../utils';
import Market from './Market';
import Global from './Global';
import './index.less'
class Home extends Component {
    constructor() {
        super();
        this.state = {
            tab: true
        }
    }

    componentDidMount() {
        if (this.props.sliders.length == 0) {
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
        console.log(this.props.loading, this.props.page);
        return (
            <div className="mall-home">
                <div className="home-header" onClick={this.handleClick}>
                    <span className={this.state.tab ? 'active' : ''}>多点超市 <img src={require('../../images/2hours.png')}
                                                                               alt=""/></span>
                    <span className={this.state.tab ? '' : 'active'}>全球精选</span>
                    <NavLink to='/search'><span title='搜索商品' className='R'><i className='iconfont icon-sousuo'></i></span></NavLink>
                </div>

                {
                    this.state.tab ?
                        <div className="content-scroll" ref="content">
                            <Market {...this.props}/></div>
                        :
                        <div className="content-scroll">
                            <Global {...this.props}/>
                        </div>
                }

            </div>
        )
    }
}
export default connect(state=>state.home, actions)(Home)