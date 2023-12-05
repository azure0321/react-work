import React, {Component} from 'react';
import Subject from './Subject';
import Content from './Content';
import Section from './Section';
import Footer from './Footer';
import './App.css';

class App extends Component{
  render(){
    return(
          <div className="App">
            <Subject/>
            <Section/>
            <Content/>
            <Footer/>
        </div>
    );
  }
}

export default App;
