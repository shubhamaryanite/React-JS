
//////////////////////using props///////////////////

//////////////////////written in Greet.js file///////////////////////

import React from 'react'

// function greet()
// {
//     return <h1>Hello Shubham !!</h1>
// }
//jsx contain only one wrapper element
const Greet= props =>{
    console.log(props)
return ( 
    <div>
        <h1>Hello {props.name} likes {props.heroName}</h1>
            {props.children}
    </div>
)
}

export default Greet


//////////////////////written in App.js file/////////////////////////////////

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
      <Greet name="Bruce" heroName="Batman">
        <p>This is Children's props</p>
      </Greet>
      <Greet name="Clark" heroName=" Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>
      
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Bruce" heroName="Batman"></Welcome>

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
