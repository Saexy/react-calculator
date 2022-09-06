import React from 'react';
import './App.css'

import Calculator from './components/Calculator';

const App = () => {
  return (
  <div className='container'>
    <div className='title'>Calculadora</div>
    <Calculator></Calculator>
  </div>
  )
}
 
export default App;