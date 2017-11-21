import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/action/home';
import Slider from './Slider'
import './index.less'
class Home extends Component {
    componentDidMount() {
        this.props.getHomeDate();
    }
    render() {
        return (
            <div className="mall-home">
                <div className="home-header">
                    <span>多点超市 <img src={require('../../images/2hours.png')} alt=""/></span>
                    <span>全球精选</span>
                </div>
                <div className="content-scroll">
                   <Slider sliders={this.props.sliders}/>
                    <div className="pannel">
                        <div className="active1">
                            <section className="ztly">

                                <div className="panel-title"><img src={this.props.panelTitle.panelTitle1.imageUrl} alt=""/></div>
                                {this.props.panelBody.panelBody1.images.length>0?
                                <div className="panel-body panel-body-1-2">
                                    <a className="col-6 row-1" href=""><img src={this.props.panelBody.panelBody1.images[0].imageUrl} alt=""/></a>
                                    <span className="col-6 row-1">
                                        <a className="row-2" href=""><img src={this.props.panelBody.panelBody1.images[1].imageUrl} alt=""/></a>
                                        <a className="row-2" href=""><img src={this.props.panelBody.panelBody1.images[2].imageUrl} alt=""/></a>
                                    </span>
                                </div>:null}
                            </section>
                            <section>
                                <a href=''><img src={this.props.panelBottom.images1.imageUrl} alt=""/></a>
                            </section>
                            <section className="csyx">
                                <div className="panel-title"><img src={this.props.panelTitle.panelTitle2.imageUrl} alt=""/></div>
                                <ul className="panel-body panel-body-3-3">{
                                    this.props.panelBody.panelBody2.images.length>0?
                                        this.props.panelBody.panelBody2.images.map((item,index)=><li className="col-3" key={index}>
                                            <img src={item.imageUrl} alt=""/></li>)
                                    :null
                                }</ul>



                            </section>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default connect(state=>state.home, actions)(Home)