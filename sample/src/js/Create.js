import React, {Component} from 'react';

class Create extends Component{
    render(){
        return(
            <article>
                <h2>Create Content</h2>
                <form action ="/create_process" method="post">
                    onSubmit={(e)=>{e.preventDefault();
                                    const title = e.target.title.value;
                                    const desc = e.target.desc.value;
                                    this.props.onSubmit(title,desc);}}
                    <p><input type="text" name="title"></input></p>
                    <p><textarea name="desc"></textarea></p>
                    <p><input type="submit" value="전송"></input></p>
                </form>
            </article>
        )
    }
}

export default Create;