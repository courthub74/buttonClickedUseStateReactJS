import React from 'react';
import './style.css';
import React, { useState } from 'react';

//BUTTON 1

//after we import useState

//declare function Button1
const Button1 = () => {
  /*
  For the State 
    -declare the State 
    -set the variable and setter in an array
    -use useState to get them their initial values
     */
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////////////

//BUTTON 2

//Button 2 is created through a class component (extends React.Component)

class Button2 extends React.Component {
  //First declare the state and the variable and give it initial value of 0
  state = {
    count: 0,
  };
  //declare a method called buttonIncrement
  //inside we will affect the state and set it to count and count will change it
  //initial value to count + 1
  buttonIncrement = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  //then render the page and return the button that every time its clicked
  //the buttonIncrement method will be called incrementing the state value
  render() {
    return (
      <div>
        <p>This is a second Button</p>
        <button onClick={this.buttonIncrement}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default function App() {
  return (
    <>
      <Button1 />
      <Button2 />
    </>
  );
}
