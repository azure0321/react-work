import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <header>
                <li>{this.props.header.desc[0]}</li>
                <li>{this.props.header.desc[1]}</li>
                <li>{this.props.header.desc[2]}</li>
                <li>{this.props.header.desc[3]}</li>
                <li>{this.props.header.desc[4]}</li>
            </header>
        )
    }
}

export default Header;
