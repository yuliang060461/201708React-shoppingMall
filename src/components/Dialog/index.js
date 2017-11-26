import React, {Component} from 'react';
import './index.less';
export default class Dialog extends Component {
componentDidMount(){
    clearTimeout(this.timer);
    if(this.props.isShow){
        this.timer=setTimeout(()=>{
            this.props.removeFlag();
        },1000)
    }
}
    render() {
        let success = 'iconfont icon-right-1';
        let error = 'iconfont icon-chahaozhuanhuan';
        return (
            <div>
                <div className="dialog">
                    <div className="dialogBox">
                        <i className={this.props.flag.code ? error : success}></i>
                        <div>{this.props.flag.message}</div>
                    </div>
                </div>
            </div>

        )
    }
}
