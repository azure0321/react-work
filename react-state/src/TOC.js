import React, {Component} from 'react';

class TOC extends Component{
    render(){
        return(
            <ul>
                <li><a href={this.props.contents[0].href}>{this.props.contents[0].title}</a></li>
                <li><a href={this.props.contents[1].href}>{this.props.contents[1].title}</a></li>
                <li><a href={this.props.contents[2].href}>{this.props.contents[2].title}</a></li>
            </ul>
        )
    }
}

export default TOC;