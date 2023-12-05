import React, {Component} from 'react';
import Content from './Content.js';
import Control from './Control.js';
import Create from '.Create.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contents:[{id:1,title:"HTML",desc:"HTML is fun"},
                {id:2,title:"CSS",desc:"CSS is fun"},
                {id:3,title:"JavaScript",desc:"JavaScript is fun"}
              ],
      change: 1,
      mode:'create',       
    }
  }
  findContentById(id){
    let content;
    for (let i =0; i < this.state.contents.length; i++){
      if (id === this.state.contents[i].id){
          content = this.state.contents[i];
          break;
      }
    }
    return content;
  }  
  render(){
    const search = this.findContentById(this.state.change);
    console.log(this.state.mode);
    let article;
    if (this.state.mode==="create"){
      article=<Create onSubmit = {
        (title,desc)=>{this.state.contents.push({id:this.state.contents.length+1,title:title,desc:desc})}}/>
    }
    return(
      <div className="App">
        <Content content={this.state.contents} 
                 onChangePage={
                 (id) => {this.setState({change:id})}}
                 search={search}/>
        <Control onChangeMode={
          (mode) => this.setState({mode:mode})
        }/>
        {article}
      </div>
    )
  }
}

export default App;