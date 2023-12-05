import React, {Component} from 'react';

class Content extends Component{
    render(){
        let title, url, desc;
        let data = this.props.contents;
        let lists=[];
        for (let i = 0; i <data.length; i++){
            lists.push(<a href={data[i].url}><li>{data[i].title}</li></a>);
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
