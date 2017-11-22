import React,{Component} from 'react'
import './index.less'
import LazyLoad from 'react-lazyload'
import Loading from '../../../Home/Loading'
export default class SearchlistSort extends Component{
    render(){
        console.log(this.props.message);
        return(
            <div>
                <ul className='sort-con'>
                    {
                        this.props.dataList.map((item,index)=>(
                            <li key={index} className={index%2==0?'border-right':''}>
                                <div className='img-wrapper'>
                                    <img src={item.img} alt=""/>
                                </div>
                                <p className='sort-intro'>{item.name}</p>
                                <p className='sort-price'>
                                    <span className='L'>￥{item.totalPrice}</span>
                                    <span className='R sord-add'>+</span>
                                </p>
                            </li>
                            )
                        )
                    }
                </ul>

                <div>
                    <span className='cart'><i className='iconfont icon-gouwuche'></i></span>
                </div>
            </div>
        )
    }
}
