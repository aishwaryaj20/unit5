import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
export const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
   const [page, setPage] = useState(1);                                     


  useEffect(() => {
    getTodo();
  }, [page]);

  const getTodo = () => {
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
      .then((d) => d.json())
      .then((res) => {
        setTodo(res);
      });
    // method: "POST",
    /// body: JSON.stringify(payload),
    // headers: {
    //   "content-type": "application/json",
    // },
  };

  const addTodo = () => {
    const payload = {
      title: text,
      status: false,
    };
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getTodo();
      setText("");
    });
  };
  //const [todos, setTodos] = useState([]);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      ></input>
      <button onClick={addTodo}> Add text</button>
      {todo.map((e, i) => (
        <div key={i}> {e.title}</div>
      ))}

      <button disabled={page===1} onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
