import React, {Component} from 'react';
import Subject from '../components/Subject.js';
import TOC from '../components/TOC.js';
import ReadContent from '../components/ReadContent.js';
import Control from '../components/Control.js';
import CreateContent from '../components/CreateContent.js';
import UpdateContent from '../components/UpdateContent.js';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:"welcome",
      welcome:{title:"welcome",desc:"Hello React"},
      subject:{
        title:"WEB",
        sub:"World Wide Web"
      },
      contents:[{id:1, title:"HTML", desc:"HTML is for information."},
                {id:2, title:"CSS", desc:"CSS is for design."},
                {id:3, title:"JavaScript", desc:"JavaScript is for interative."}],
     selected_content_id : 1            
    }
  }

  findContentById(id){
    let content;
    for (let i =0; i <this.state.contents.length; i++){
      if (id === this.state.contents[i].id){
          content = this.state.contents[i];
          break; 
      }
    }
    return content;
  }
 
  render(){
    let title, desc;
    let article;
    console.log(this.state.mode);

    if (this.state.mode === "welcome"){
      title = this.state.welcome.title;
      desc = this.state.welcome.desc;
    }
    else if(this.state.mode === "read"){
      const content = this.findContentById(this.state.selected_content_id)
      title = content.title;
      desc = content.desc;
    }
    else if (this.state.mode === "create"){
      article = <CreateContent onSubmit={
        function(title, desc){
          this.state.contents.push(
            {id:this.state.contents.length+1, title:title, desc:desc}
          );
          this.setState({
            contents:this.state.contents
          })
        }.bind(this)
      }/>
    }
    else if (this.state.mode === "update"){
      const content = this.findContentById(this.state.selected_content_id);
      title = content.title;
      desc = content.desc;
      article = <UpdateContent
                  title = {title}
                  desc = {desc} 
                  onSubmit={
                  function(title,desc){
                    content.title=title;
                    content.desc=desc;
                    this.setState({mode:"read"})
                  }.bind(this)
                 }/>
    }

    return(
      <div className="App">
        <Subject title={this.state.subject.title}
                 sub={this.state.subject.sub}
                 onChangePage={function(){
                               this.setState({mode:"welcome"})
                              }.bind(this)}/>

        <TOC contents={this.state.contents}
             onSelect={
                function(id){
                  this.setState({mode:"read",
                                 selected_content_id:id})
                            }.bind(this)}/>

        <Control onChangeMode={
          function(mode){
            if (mode === "delete"){
              let contents = this.state.contents;
              if (window.confirm("Are you sure?")){
                for (let i = 0; i<contents.length; i++){
                  if (contents[i].id === this.state.selected_content_id){
                    contents.splice(i,1);
                  }
                }
              }  
            this.setState({mode:"welcome",contents:contents});}
            else {this.setState({mode:mode})}}.bind(this)
          }/>
        <ReadContent title={title} desc={desc}/>
        {article}
      </div>
      )
    }
  } 

export default App;