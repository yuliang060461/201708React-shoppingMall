import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class NoShopping extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="headerTitle">购物车</div>
                </div>
                <div className="noShoppingContent">
                    <img className="" src={require('../../images/cart_emtry.png')} alt=""/>
                    <p>忙碌了一天，还是买买买最开心</p>
                    <div className="noShoppingLink">
                        <Link to="/">去逛逛</Link>
                    </div>
                </div>
            </div>
        )
    }
}