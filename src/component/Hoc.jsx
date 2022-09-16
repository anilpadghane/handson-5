import React from 'react'
import './App.css'

const products = [
   {pName: 'SmartPhone', price: 15999, color: 'navyblue'},
   {pName: 'Tv', price: 8999, color: 'red'},
   {pName: 'HtmlBook', price: 999, color: 'white'},
   {pName: 'Shoes', price: 3199, color: 'Grey'},
   {pName: 'T-shirts', price: 950, color: 'blue'}
]

const withSearch = (WrappedComponent) => {
    class withSearch extends React.Component{
      constructor(){
        super();
        this.state={
          search: '',
        }
      }
  
      updateName = (e) =>{
       this.setState({search: e.target.value})
      }

      filterName = (e) =>{
      return  products.filter (products => products.pName.toLowerCase().includes(this.state.search))
      }
      
  render(){
    let updateProductName = this.filterName();
    return (
      <div className='head'>
      <h2 className='text-head'> HOC: Higher Order Component</h2>
      <ul className='text'>
      <li>A Higher-order component is a function that takes a component and returns a new component.</li>

      <li>A HOC is an advanced technique in React for reusing component logic.</li>
      <li> HOCs are not part of the React API. </li>
      <li> They are a pattern that emerges from React’s compositional nature.</li>
      </ul>
      <br/>
     <h4 className='text-head'>Syntax:</h4><p className='text'> const EnhancedComponent = higherOrderComponent(WrappedComponent);</p>
     <br/>
     <h4 className='text-head'>Example 1: </h4>
     <label className='text-head'>
     Search 
      <input type="search" onChange={this.updateName}/>
     </label>
      
      <WrappedComponent  products ={updateProductName} {...this.props} />  
    
      </div>
    )
  }
  } 
  return withSearch;
}
export default withSearch;