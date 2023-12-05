import React, {Component} from 'react';

class Content extends Component{
    render(){
        let lists=[];
        let data = this.props.content;
        let change = this.props.onChangePage;
        console.log(change);
        for (let i = 0; i<data.length; i++){
            lists.push(<a href={data[i].id} 
            onClick={function(e){e.preventDefault(); 
                     change(data[i].id)}.bind(this)}>
                     <li>{data[i].title}{data[i].id}</li></a>)}
        return(
            <div>
                <ul>
                    {lists}
                </ul>
                <p>
                    {this.props.search.desc}
                </p>
            </div>
        )
    }
}                
export default Content;
