////////////////////////written in Greet.JS file/////////////////////////

import React from 'react'

// function greet()
// {
//     return <h1>Hello Shubham !!</h1>
// }

const Greet=()=><h1>Hello Shubham</h1>

export default Greet

/////////////////////////written in App.js file/////////////////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './componenets/Greet'
import Welcome from './componenets/Welcome'

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
