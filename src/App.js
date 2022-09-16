import React, { Component } from 'react'
import ProductList from './component/Productlist';
import Pure from './component/Pure';
import './App.css'

class App extends Component {
 render(){
  return (
    <div className='App'>
      <ProductList/>
      <hr/>
      <Pure/>
    </div>
  )
 }
}
export default App;