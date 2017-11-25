import React,{Component} from 'react';
import {createHashHistory} from 'history';
let history =createHashHistory();
import './index.less'
export default class Detailvip extends Component{
    goback=()=>{
        history.goBack();
    };

    componentWillMount(){
        if(!this.props.location.state){
            return this.props.history.push('/');
        }
    }
    render(){
        let {imageUrl,resource1,resource2,resource3,resource4,resource5
        }= this.props.location.state||{};

        return (
            <div className="ceshi" >
                <div className="detail-header">
                    <div className="detailheader">
                        <div className="detai-tab">
                       <span className="left" >
                           <i className="iconfont icon-houtui" onClick={this.goback}></i>
                       </span>
                            <span className="center">商品详情</span>
                            <span className="right">说明</span>
                        </div>
                        <img src={imageUrl}/>
                        <img src={resource1}/>
                        <img src={resource2}/>
                        <img src={resource3}/>
                        <img src={resource4}/>
                        <img src={resource5}/>
                    </div>

            </div>


            </div>
        )
    }
}