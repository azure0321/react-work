import React, {Component} from 'react';

class Content extends Component{
    render(){
        return(
            <content>
                <a href="/" onClick={(e)=>{this.props.onChangePage(); 
                    e.preventDefault()}}>{this.props.title}</a>
                <h3>{this.props.desc}</h3>
            </content>    
        )
    }            
}
export default Content;
