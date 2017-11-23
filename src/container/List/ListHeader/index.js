import React,{Component} from 'react';
import logo from '../../../../mock/images/list-logo.png';
import viplist from '../../../../mock/images/vip-1.jpg';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './index.less';

export default class ListHeader extends Component{
    constructor(){
        super();
        this.state={isShowVip:false,title:'北京物美回龙观东大街店'};
    }
    getVipAddress = () => (
        <CSSTransition
            timeout={1000}
            classNames="fade"
        >
            <ul className="choose-address"
                onClick={event=>{
                    console.log(event.target,event.target.value);
                    if(event.target.nodeName.toLowerCase()=='p'){
                        //debugger;
                        this.setState({
                            title:event.target.innerHTML
                        })
                    }
                    /*if(event.target.className=='close-button'){
                        this.setState({isShowVip:false});
                    }*/
                    //this.props.setAddress(event.target.dataset.id);
                    this.setState({isShowVip:false});}}
            >
                <li>&lt; 发现附近门店 <span className="close-button">取消</span></li>
                <li><img src={viplist}/><p>全球精选 (北京物美回龙观东大街店)</p></li>
                <li><img src={viplist}/><p>多点超市 (北京物美西三旗东大街店)</p></li>
                <li><img src={viplist}/><p>全球精选 (北京物美回龙观东大街店)</p></li>
                <li><img src={viplist}/><p>全球精选 (北京物美回龙观东大街店)</p></li>
                <li><img src={viplist}/><p>全球精选 (北京物美回龙观东大街店)</p></li>
            </ul>
        </CSSTransition>
    )
    render(){
        return (
            <div className="list-header">
                <span className="list-search"><i className="iconfont icon-sousuo"/></span>
                <img src={logo} className="list-logo"/>
                <p className="list-address"
                   onClick={() => this.setState({isShowVip: !this.state.isShowVip})}
                >
                    <span className="text" >{this.state.title}</span><span className="more"></span>
                </p>
                <TransitionGroup>
                    {
                        this.state.isShowVip ? this.getVipAddress() : null
                    }
                </TransitionGroup>
            </div>
        )
    }
}
