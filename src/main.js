import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Vip from './container/index'

class Content extends Component{
    render(){
        return(<div>
            <Vip/>
        </div>)
    }
}


ReactDOM.render(<div>
    <Content/>
</div>, document.querySelector('#root'));
