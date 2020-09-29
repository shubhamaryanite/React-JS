//////with jsx///////
//////////written in Jsxp.js file////////////


import React from 'react'

//two tags cannot be created  at once
// const Jsxp = () =>{
//     return React.createElement('div',null, 'h1', 'Hello Shubham')
// }
//need to nested createelement func to get two or more than two features/tags
const Jsxp = () =>{
    return React.createElement('div',{id:'hello', className:'dummyClass'}, React.createElement('h1', null, 'Hello Shubham'))
}

export default Jsxp




///////written in App.js file/////////////



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './componenets/Greet'
import Welcome from './componenets/Welcome'
import Hello from './componenets/Hello'
import Jsxp from './componenets/Jsxp'

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
      <Jsxp/>
    </div>
  );
}
// class App extends Component
// {
//   render()
//   {
//     return
//     (
//       <div className="App">
//         {
//           // <Greet/>
//           // <Welcome/>
//           <Hello/>
//         }
//       </div>
//     );
//   }
// }

export default App;
