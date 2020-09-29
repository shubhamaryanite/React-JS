//////////////////////////written in Counter.js file ////////////////////////////////////////

//class components

import React, { Component } from 'react'

class Counter extends Component {

    constructor (props){
        super(props)
        this.state={
            count: 0
        }
    }

    increment()
    {
        //never modify state directly
        //this.state.count=this.state.count+1;

        //always use setstate to modify the content
        // this.setState
        // (
        //     {
        //         count: this.state.count+1
        //     }, ()=>{console.log('Callback value ', this.state.count)}
        // )

        //to change the vlaue on the basis of prev state
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
        //calls to setState are asynchronous so will call console.log first before change value
        //to handle this pass call by function as second parameter 
        console.log(this.state.count)
    }


    incrementFive()
    {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <div>Count - {this.state.count} </div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter



/////////////////////////written un App.js file////////////////////////





import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './componenets/Greet'
import Welcome from './componenets/Welcome'
import Hello from './componenets/Hello'
import Jsxp from './componenets/Jsxp'
import Message from './componenets/Message'
import Counter from './componenets/Counter'

function App() {
  return (
    <div className="App">
      <Message></Message>
      <Counter></Counter>
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
