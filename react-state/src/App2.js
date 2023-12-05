import React, {Component} from 'react';
import Subject from './Subject';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB", desc:"World Wide Web"}
    }
  }

  render(){
    return(
      <div className="App">
        <Subject title = {this.state.subject.title} desc = {this.state.subject.desc}/>
      </div>
    );
  }
}

export default App;