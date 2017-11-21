import React,{Component} from 'react';
import './index.less';

export default class List extends Component{
    render(){
        return(
            <div className="list">
                <section className="list-distinct">
                    <ul>
                        <li className="super-mall selected">多点超市</li>
                        <li className="global-select">全球精选</li>
                    </ul>
                </section>
                <section className="list-search">
                    <span className="icon-back">&lt;</span>
                    <div className="tool-bar">
                        <i className="iconfont icon-sousuo1"/>
                        <input type="text" placeholder="搜索多点超市商品/三旗百汇店"/>
                    </div>
                    <div className="screen">
                        <span>筛选</span>
                    </div>
                </section>
                <section className="list-body">
                    <section className="list-nav">
                        <dl>
                            <dt>推荐商品</dt>
                            <dd>品尝时光</dd>
                            <dd>幸福晚饭</dd>
                            <dd>幸福晚饭</dd>元气早餐
                        </dl>
                    </section>
                    <section className="list-detail">

                    </section>
                </section>
            </div>
        )
    }
}