import React, {Component, useState} from 'react';
import './App.css';

class ClassComp extends Component{
  state = {
    number : this.props.initNumber,
    date : new Date().toString()
  }
  render(){
    const number = this.state.initNumber;
    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number : {this.state.number}</p>
        <p>{this.state.date}</p>
        <button type ="button" onClick={(e)=>{this.setState({date : new Date().toString(), number:Math.random()})}}>Random 선택</button>
      </div>
    )
  }
}

function FunctionComp(props){
  const numberState = useState(props.initNumber);
  const number = numberState[0];
  const setNumber = numberState[1];
  const dateState = useState(new Date().toString());
  const date = dateState[0];
  const setDate = dateState[1];

  return(
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Number : {number} </p>
      <p>Date : {date}</p>
      <button type="button" onClick={()=>{setNumber(Math.random()); setDate(new Date().toString())}}>Random 선택</button>
    </div>
  )
}

function App(){
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <ClassComp initNumber={10}/>
      <FunctionComp initNumber={5}/>
    </div>
  )
}

export default App;