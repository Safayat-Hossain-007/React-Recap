import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const products =[
    {name:'Hp-laptop',price:'200$'},
    {name:'Apple-laptop',price:'400$'},
    {name:'Acer-laptop',price:'300$'},
    {name:'Chrome-Book',price:'200$'}
  ];

 
  const[persons,setPersons] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setPersons(data));
  },[])

  // const persons = [
  //   {name:'Max  Vestappen', prof:'F1-Racer'},{name:'Mike Tyson', prof:'Boxer'},
  //   {name:'Christiano Ronaldo',prof:'Footballer'},
  //   {name:'Louis Hamilton', prof:'F1-racer'}
  // ];
  return (
    <div className="App">
      <header className="App-header">
      {/* <Person name={persons[0]} prof="F1-Racer"></Person>
      <Person name={persons[1]} prof="Boxer"></Person>
      <Person name={persons[2]} prof="Foot Baller"></Person>
      <Person name={persons[3]} prof="F1-Racer"></Person>
      <Person></Person> */}
      
      <MovieCounter></MovieCounter>  
      {
        persons.map(nx => <Person name={nx.name} prof={nx.prof} key={nx.id} ></Person>)
      }

      {
        products.map(pd => <Products name={pd.name} price={pd.price}></Products>)
      }

      </header>
    </div>
  );
}

function MovieCounter(){
  const[count,setCount] = useState(0);
  const handleClick = ()=>{
    setCount(count+1);
  }
  
  return(
    <div>
      <button onClick={handleClick}>Add Movies</button>
      <h5>Number of movies: {count} </h5>
      <MovieDisplay movies = {count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return(
    <h4>Movies i have acted: {props.movies} </h4>
  )
}


function Person(props){
  const style = {
    border:'2px solid purple',
    margin:'10px 10px',
    height:'300px',
    width:'600px',
    float:'left',
    borderRadius:'25px'
  }
  return(
    <div style={style}>
      <h1>I'm {props.name ||'Nobody'} </h1>
      <h3>I'm {props.prof ||'Bekar'} !</h3>
      
    </div>
    
  )
}

function Products(props){
  const style={
    border:'2px solid purple',
    borderRadius:'25px',
    margin:'10px 10px',
    height:'200px',
    width:'600px',
    float:'left',
    padding:'10px 10px',
    backgroundColor:'gray'
  }
  return(
    <div style={style}>
      <h3>Name of the products: {props.name} </h3>
      <h3>Price : {props.price} </h3>
    </div>
  )
}

export default App;
