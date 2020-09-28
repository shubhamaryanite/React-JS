///////////written in Welcome.js file/////////////

import React, {Component} from 'react'

class Welcome extends Component
{
    render()
    {
        return <h1>Class Component</h1>
    }
}

export default Welcome


///////////written in app.js file/////////////////

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
