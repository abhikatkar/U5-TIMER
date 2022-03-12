import logo from './logo.svg';
import './App.css';
import { Timer } from './Components/Timer';
import { useState } from 'react';

function App() {
  const start = 0;


  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <h1>Timer</h1>
     {show ? <Timer start={start} />:""}

     <button onClick={()=>{
       setShow(!show)
     }}>{show ? "Show":"Not Show"}</button>
    </div>
  );
}

export default App;
