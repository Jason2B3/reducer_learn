import "./App.css";
import React, { useState, useReducer } from "react";
export default App;

function reducer(todos, action) {
  //% If action.type is ADD_LIST_ITEM, add an object entry to our todo array
  if (action.type === "ADD_LIST_ITEM") {
    return [...todos, { name: action.payload.name, id: Math.random() }];
  }
  //% If the action.type is something else, return the todo array as is
  return todos;
}
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  //% Will give userInput to the reducerFn as its name KVP in the payload
  // Also, userInput's double binded to the input element
  const [userInput, setUserInput] = useState("");

  //% Call reducerFn and give it the stateful userInput variable through the payload
  const handleSubmit = function (e) {
    e.preventDefault();
    dispatch({
      type: "ADD_LIST_ITEM",
      payload: { name: userInput }, 
      //$ Payload (must give stateful userInput variable to reducerFn)
      //$ Cannot directly access it b/c the reducerFn is defined outside the App component ƒ()
    });
    console.log(todos);
    setUserInput(""); // clear input field
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} // Quick double bind
        />
      </form>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.name}</li>;
      })}
    </React.Fragment>
  );
}
