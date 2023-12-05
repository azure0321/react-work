// import './App.css';
import React, {Component} from 'react';
import Subject,{Component} from './Subject';
import TOC, {Component} from './TOC';
import Content, {Component} from './Content';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject/>
        <TOC/>
        <Content title="HTML" desc="World Wide Web"/>
      </div>    
    );
  }
}

class Mycomponent extends Component{
  render(){
    return (
      <div>
        <h1>{this.props.data}</h1>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

export default App;