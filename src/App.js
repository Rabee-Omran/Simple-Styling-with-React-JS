import React, { Component } from 'react';
import './App.css';

class App extends Component{

  state = {
    className :'bg-green'
  }

  render(){

     
    return (
      
      <div>

            <div className ={this.state.className}>
                TEST
            </div>
            <button onClick = {()=> {this.setState({className:'bg-red'})}}> Click Me to red</button>
            <button onClick = {()=> {this.setState({className:'bg-green'})}}> Click Me to green</button>
      </div>
    );
  }
}

export default App;
