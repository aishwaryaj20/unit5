import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  

    const [count, setCount] = useState(0)

    const addOne=(value) =>
    {
      //  if(count < 10) {
       setCount (count+value*2)

    // setCount((prev) => {
    //     if(prev === 10)
    //     {
    // return 0;
    //     }
    //     return prev + value;
    // });
    
  
    //}
}

if(count >10)
{
    return <div>Max reached</div>
}
  
  return <h1 className="head">
     
      <h3>Counter: {count}</h3>
      <div>
      <button onClick={() => addOne(1)}>Add one</button>
      <button onClick={() => addOne(-1)}>sub one</button>
      <div>Counter is {count % 2 ===0 ? "Even" : "Odd"}</div>  
      </div>



    {/* /*{count < 10 && (
    <div>
      <button onClick={() => addOne(1)}>Add one</button>
      <button onClick={() => addOne(-1)}>sub one</button>
      </div>
        )} */}
      </h1>

}
export default App;
