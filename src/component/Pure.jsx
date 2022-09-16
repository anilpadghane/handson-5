import React, { PureComponent } from 'react';
import './App.css';
class Pure extends PureComponent{
  constructor(){
    super();
    this.state={
      count: 0
    }
  }

  render(){
    console.warn('render');
    return (
      <div className="head">
        <header className='text-head'>
 
        <h1>Pure Components: </h1>
        <ul>
        <li className='text'>These are the one which prevents being re-rendered, if the values of state and props has not changed.</li>
        <li className='text'>"shouldComponentUpdate", a lifecycle method which will called in these Components to compare the state and props value.</li>
        </ul>

          <h4>Pure Component State Count = {this.state.count}</h4>

          
          <button className='btn' onClick={()=>{this.setState({count: this.state.count+1})}}>Increment</button><br></br><br></br>
          <button className='btn' onClick={()=>{this.setState({count: this.state.count-1})}}>Decrement</button>
        </header>
      </div>
    );
  }
}
export default Pure;