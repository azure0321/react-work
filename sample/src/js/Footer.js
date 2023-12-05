import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer>
                <h5>{this.props.contents[0].desc}</h5>
                <h5>{this.props.contents[1].desc}</h5>
                <h5>{this.props.contents[2].desc}</h5>
                <h5>{this.props.contents[3].desc}</h5>
                <h5>{this.props.contents[4].desc}</h5>
            </footer>
        )
    }
}

export default Footer;
