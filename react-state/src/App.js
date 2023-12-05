import React, {Component} from 'react';
import Subject from './Subject';
import TOC from './TOC';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB", desc:"World Wide Web"},
      contents:[{id:1, title:"HTML", href:"1.html", desc:"HTML is for information"},
                {id:2, title:"CSS", href:"2.html", desc:"CSS is for design"},
                {id:3, title:"JavaScript",href:"3.html", desc:"JavaScript is for interactive."}]
    }
  }

  render(){
    return(
      <div className="App">
        <Subject title = {this.state.subject.title} desc = {this.state.subject.desc}/>
        <TOC contents = {this.state.contents} />
      </div>
    );
  }
}

export default App;