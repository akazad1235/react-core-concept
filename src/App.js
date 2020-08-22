import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const friends = ['Anis', 'Mokles', 'tarikul', 'Md. Abdul Motin', 'ratul', 'Rashedul']
  const proffession = [
    {
      name: 'Md. MObin',
     pro:'Web Developer',
     salary: '$5000'
    },
    {
      name: 'Md. Tarek',
     pro:'Android Developer',
     salary: '$4000'
  },
    {
      name: 'Md. Reyad ', 
    pro:'FrondEnd Developer',
    salary: '$8000'
  }
]

  
  return (
    <div className="App">
      <header className="App-header">
       
        
       
          {
            proffession.map(
            profList => <Person prof={profList}></Person>
            )
          }
      <Counter></Counter>
      </header>    
    </div>
  );
}

function Person(props){
  let styleData = {
    border:'1px solid gold',
    margin:'10px',
  }
  const {name, pro, salary} =  props.prof
  {/*console.log(name, pro, salary);*/}
  return (
    <div style={styleData}>
          <h1>{name}</h1>
          <h1>{pro}</h1>
          <h1>{salary}</h1>
      
    </div>
  )
}


function Counter(){
   const [count, setCount] = useState(10)

   const buttonHandle = () =>{
     const newCount = count+1
     setCount(newCount)
   }

   return (
     <div>
       <p>Count: {count} </p>
       <button onClick={buttonHandle}>add</button>
       <button onClick={()=>setCount(count-1)}>sub</button>
     </div>
   )

}

export default App;
