import React, { Component } from 'react';
import classnames from "classnames";
import './App.css';

class App extends Component{

  

  render(){

    let classes = classnames('here we can put final classes',{green: 1>0, whiteText: 2<4, boldText: 8==8});
   
    
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
