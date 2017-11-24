import React, {Component} from 'react';
import Viphome from './vip-home';
import {connect} from 'react-redux';
import action from '../../store/actionsvip/vip';
import action1 from '../../store/action/session';
import Vipsign from "./vip-sign/index";
// import {createStore} from 'redux';
// let store = createStore();
class Vip extends Component {

    componentDidMount() {
        this.props.getVipData();
    }

    render() {
        return (
            <div>
                {
                    this.props.session.user ? <Viphome slider={this.props.vip.slider}>
                    </Viphome> : <Vipsign/>
                }
            </div>
        )
    }
}
export default connect(state => state, {...action, ...action1})(Vip)