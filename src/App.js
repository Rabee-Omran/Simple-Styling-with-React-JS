import React, { Component } from 'react';
import './App.css';

class App extends Component{

  

  render(){

    let classes = '';
    if(true)  classes += 'green ';
    if(true)  classes += 'whiteText ';
    if(true)  classes += 'boldText ';
    
    return (
      
      <div>

            <div className ={classes} >
                TEST
            </div>
            {/* <button onClick = {()=> {this.setState({active: ! this.state.active})}}> Change Active</button> */}
           
      </div>
    );
  }
}

export default App;
