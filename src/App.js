import React, { Component } from 'react';
import './App.css';

class App extends Component{

  state = {
    className :'bg-green',
    style : {color:'white', fontWeight:'bold'},
    active: true
  }

  render(){

    return (
      
      <div>

            <div className ={this.state.active ? 'bg-green' : 'bg-red'} style = {this.state.style}>
                TEST
            </div>
            <button onClick = {()=> {this.setState({active: ! this.state.active})}}> Change Active</button>
           
      </div>
    );
  }
}

export default App;
