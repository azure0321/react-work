import React, {Component} from 'react';
import Subject from './Subject.js';
import Content from './Content.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"Welcome", desc:"Welcome React"},
      content:[{id:1, title:"HTML"},{id:2, title:"CSS"},{id:3, title:"JavaScript"},{id:4, title:"React"}]
    }
  }

  render(){
    return (
      <div className="App">
        <Subject h1={this.state.subject.title} h3={this.state.subject.desc}/>
        <Content content={this.state.content}/>
      </div>
    )
  }
}

export default App;