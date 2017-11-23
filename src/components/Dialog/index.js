import React,{Component} from 'react';
import './index.less';
export default class Dialog extends Component{
    constructor(){
        super();
        this.state={
            isShow:true,
            flag:true,
            code:0
        }
    }
    componentDidMount(){
        clearTimeout(this.timer);
        if(this.state.isShow){
            this.timer=setTimeout(()=>{
                this.setState({
                    isShow:false
                })
            },3000)
        }
    }
    render(){
        let success='iconfont icon-right-1';
        let error='iconfont icon-chahaozhuanhuan';
        return (

            <div className="dialog">
                {
                    this.state.isShow?<div className="dialogBox">
                        <i className={this.state.flag?success:error}></i>
                        <div>{this.state.code?'添加失败':'添加成功'}</div>
                    </div>:null
                }

            </div>
        )
    }
}
