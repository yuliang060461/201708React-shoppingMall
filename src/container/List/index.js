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

                </section>
                <section className="list-body">
                    <section className="list-nav">

                    </section>
                    <section className="list-detail">

                    </section>
                </section>
            </div>
        )
    }
}