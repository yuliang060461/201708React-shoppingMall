import React,{Component} from 'react';
import './index.less';
import {Link,Route} from 'react-router-dom';
import dl from '../images/denglu.gif'
export default class Vipsign extends Component{
    render(){

        /*componentDidMount() {
            this.props.getVipData();
        }*/
        return (
            <div className="vipsign">
                <div className="vip-bg">
                    <div className="my-img">
                        <img src={dl}/>
                    </div>
                    <div className="my-p">
                        <h3>您还未登录</h3>
                        <p>登入后享受更多会员福利</p>
                            <Link to="/login/account">  <button >登录</button> </Link>
                    </div>
                </div>
            </div>
        )
    }
}
