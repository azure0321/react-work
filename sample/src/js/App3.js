import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(proper);
    this.state= {
      contents:{
        mode: "welcome",
        welcome:{title:"Welcome",desc:"Hello React"}
      }

    }
  }
  render(){
    let title,desc;
    if (this.state.contents.mode == 'welcome'){
      this.state.contents.welcome.title;
      desc = this.state.contents.welcome.desc;
    }   
    return(
      <div className="App">
      </div>    
    );
  }
}

export default App;