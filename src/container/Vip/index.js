import React,{Component} from 'react';
import Viphome from './vip-home';
import {connect} from 'react-redux';
import action from '../../store/actionsvip/vip'
import Vipcore from "./vip-core/index";
class Vip extends Component{

    componentDidMount(){
        this.props.getVipData();

        // if(this.props.slider.length>0){
        //     this.props.getVipData();
        //     console.log(1);
        // }
    }

    render(){
        console.log(this.props);

        return (
            <div>
                <Viphome slider={this.props.slider}>

                </Viphome>
                {/*<Vipcore/>*/}
            </div>
        )
    }
}
export default connect(state=>state.vip,action)(Vip)