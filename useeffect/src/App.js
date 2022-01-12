
import './App.css';
import {Timer} from "./component/Timer"
import {Todo} from "./component/Todo"
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const[show, setShow] = useState(true)
  return (
    <div className="App">
      {/* <h3>Count is : {count}</h3>
      <button onClick={()=> setCount(count+1)}>Add 1</button> */}

      
    {/* //  <Todo /> */}

      <h1>Use Effect</h1>
      {show ?  <Timer /> : null}
   <button onClick={() => setShow(!show)}>{show ? "Hide": "Show"}</button>
      <Timer />
    </div>
  );
}


export default App;
