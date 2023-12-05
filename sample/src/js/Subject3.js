import React, {Component} from 'react';

class Subject extends Component{
    render(){
        return(
        <subject>
            <h1>{this.props.h1}</h1>
            <h3>{this.props.h3}</h3>
        </subject>
        )
    }
}

export default Subject;