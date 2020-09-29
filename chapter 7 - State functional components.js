////////////////////////////changing state of components/////////////////////////


////////////////////////written in Message.js/////////////////////////


import React, {Component} from 'react'

class Message extends Component
{
    constructor()
    {
        //call has to be made to base class
        super()
        this.state={
            message: 'Welcome VISITOR'
        }
    }
    
    changeMessage()
    {
        this.setState({
            message:'Thank you for subscribing'
        })
    }

    render()
    {
    return(
        <div>
            <h1>{this.state.message}</h1>
            //onClick event fires a function named as changeMessage
            <button onClick={()=> this.changeMessage()}>Subscribe</button>
        </div>
    ) 
    }
}

export default Message



//////////////////////////written in App.js/////////////////////////////////////

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './componenets/Greet'
import Welcome from './componenets/Welcome'
import Hello from './componenets/Hello'
import Jsxp from './componenets/Jsxp'
import Message from './componenets/Message'

function App() {
  return (
    <div className="App">
      <Message></Message>
      {/* <Greet/>
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
      <Jsxp/> */}
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
