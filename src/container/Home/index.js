import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/action/home';
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
        } else {
            this.setState({
                tab: true
            })
        }

    }

    render() {

        return (
            <div className="mall-home">
                <Dialog/>
                <div className="home-header" onClick={this.handleClick}>
                    <span className={this.state.tab ? 'active' : ''}>多点超市 <img src={require('../../images/2hours.png')}
                                                                               alt=""/></span>
                    <span className={this.state.tab ? '' : 'active'}>全球精选</span>
                </div>

                {
                    this.state.tab ?
                        <div className="content-scroll" ref="content">
                            <Market {...this.props.home}{...this.props.session} goodAdd={this.props.goodAdd}/></div>
                        :
                        <div className="content-scroll">
                            <Global {...this.props.home}/>
                        </div>
                }
            </div>
        )
    }
}
export default connect(state=>state, actions)(Home)