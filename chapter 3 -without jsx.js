///////////without jsx//////////
////////written in Hello.js file/////////////


import React from 'react'

const Hello = () => <div className='helloClass'><h1>Hello World !!</h1></div>


export default Hello






////////written in app.js file///////////////


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
