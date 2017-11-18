import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Content extends Component{
    render(){
        return(<div>
            脚手架搭建完毕
        </div>)
    }
}


ReactDOM.render(<div>
    <Content/>
</div>, document.querySelector('#root'));
