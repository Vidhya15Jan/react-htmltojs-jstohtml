import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:"vid",
      name1:["keer","ishu","shri"]
    }
  }
  changedata=(e)=>{
    this.setState({
      name:e.target.value
    })
    

  }
  pushdata=()=>{
    this.setState({
       name1:[...this.state.name1,this.state.name]
    })
  
  }
    render(){
      return(
        <div>
        <input type="text" value={this.state.name} onChange={this.changedata}/>
        <button onClick={this.pushdata}>Click me!</button>
        <ul>{

        this.state.name1.map((n)=>{
          return <li>{n}</li>
        }
        )}
        </ul>
        </div>

      );
    }
  
}
render(<App />, document.getElementById('root'));
