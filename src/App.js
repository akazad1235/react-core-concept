import React from 'react';
import logo from './logo.svg';
import './App.css';

var person = {
    name:'ak azad',
    age:25,
    dept: 'cse'

}
var color = {
    color:'red',
    backgroundColor:'blue'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         react app 
        </a>
          
      </header>
          <Person></Person>
          <Person></Person>
          <Person></Person>
    </div>
  );
}

function Person(){
  return(
    <div style={{border:'1px solid #ddd', margin:'5px'}}>
      <h1>Name: shakib Al Hasan</h1>
    <p>this my pasion</p>
    </div>

    
  ) 
}

export default App;
