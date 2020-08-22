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

  const friends = ['Anis', 'Mokles', 'tarikul', 'Md. Abdul Motin', 'ratul']
  const proffession = {
    web : "React Developer",
    android: 'react native',
  }
  return (
    <div className="App">
      <header className="App-header">
        <Person name={friends[0]} pro={friends[3]}></Person>
        <Person name={friends[4]} pro={friends[2]}></Person>
        <Person name={friends[3]} pro={proffession.android} ></Person>
      </header>    
    </div>
  );
}

function Person(props){
  let styleData = {
    border:'1px solid gold',
    margin:'10px',
  }
  return (
    <div style={styleData}>
      <h1>{props.name }</h1>
      <p> {props.pro}</p>
    </div>
  )
}

export default App;
