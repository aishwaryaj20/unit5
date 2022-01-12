import { useRef, useState } from "react";
import { useEffect } from "react";
export const Form = () => {
  const [counter, setCounter] = useState(1);

  //console.log("working first")
  useEffect(() => {
    console.log("First inside");
  });

  useEffect(() => {
    console.log("Second inside");
  });

  useEffect(() => {
    console.log("Third inside");
  });
  // console.log("working last")
  return (
    <form>
      <input type="text"></input>
      <div>
        {" "}
        <h3>Counter: {counter}</h3>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Add 1
        </button>
      </div>
    </form>
  );
};

export default Form;
