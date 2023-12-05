import React, {Component} from 'react';
import Subject from './Subject.js';
import Content from './Content.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'read',
      welcome:{title:"Welcome", desc:"Hello React"},
      subject:{href:"#",title:"WEB"},
      contents:[{id:1,title:"HTML",url:"#1", desc:"HTML is for information"},
                {id:2,title:"CSS",url:"#2", desc:"CSS is for information"},
                {id:3,title:"JavaScript",url:"#3", desc:"JavaScript is for information"},
              ],
              selected_id:1
          }
      }

  render(){
    let title, desc;
    if (this.state.mode === 'welcome'){
      title = this.state.welcome.title;
      desc = this.state.welcome.desc;
    }
    else if (this.state.mode === 'read'){
      title = this.state.contents[0].title;
      desc = this.state.contents[0].desc;
    } 

    return (
     <div className="App">
        <Subject href={this.state.subject.href} title={this.state.subject.title}/>
        <Content contents={this.state.contents} onSelect={function(){this.setState({mode:"read", selected_id:1})}.bind(this)}/>
     </div>
    )
  }
}

export default App;