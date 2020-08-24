import React, { useState, useEffect } from 'react';
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
      <Example></Example>
      <Movies></Movies>
      <Students></Students>
      
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


function Example() {
  const [users, setUsers] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>Dynamic Users:{users.length} </h1>
      <ul>
      {
        users.map(user => <li>{user.address.zipcode}</li>)
      }
      </ul>
      
    </div>
  );
}

function Movies(){

    const [movie, setMovie] = useState(5)


  return (
    <div>
      <h1>Movies:{movie}</h1>
      <OthersMovies movies ={movie+3}></OthersMovies>
      <button onClick={() => setMovie(movie +1)}>Add Movie</button>
    </div>
  )
}

function OthersMovies(props){

return <h1>Movie-2 : {props.movies}</h1>

}

function Students(){
    const studentsObj = [{name:'Azad', roll:11, age:23}, {name:'Tarikul', roll:25, age:26},  {name:'Tarikul', roll:25, age:26} ];


    return (
      <div>
        {
          studentsObj.map(std => <Schools name={std.name} roll={std.roll}></Schools>)
        }
      </div>
    )
}

function Schools(props){
    
  return(
    <div style={{border:'5px solid #dddd', width:'100%', margin:'10px'}}>
      <h5>Student Name:{props.name}</h5>
      <h5>Studet Roll: {props.roll}</h5>
      <h5>Student Age: {props.age}</h5>
    </div>
  )

}



export default App;
