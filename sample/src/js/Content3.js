import React, {Component} from 'react';

class Content extends Component{
    render(){
        let lists = []
        let data = this.props.content;
        for (let i =0; i < data.length; i++){
            lists.push(<li>{data[i].title}</li>)
        }
        return(
            <content>
                <ul>
                    {lists}
                </ul>
            </content>
        )
    }
}            

export default Content;
