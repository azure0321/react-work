import React, {Component} from 'react';
import Child from './Child';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      child: {a:'1', b:'2'}
    }
  }

  render(){
    return(
      <div className="App">
        <Child a ={this.state.child.a}/>
        <Child b ={this.state.child.b}/>
      </div>
    );
  }
}

export default App;