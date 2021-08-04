import "./App.css";
import React, { useState, useReducer } from "react";
import Todo from "./Todo";
export default App;
//^ HELPERS
export const ACTIONS = {
  ADD_TODO: "add list item",
  TOGGLE_TODO: "toggle complete status",
};
function newToDo(nombre) {
  return { id: Date.now(), name: nombre, complete: false };
}
//^ REDUCER FUNCTION
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      //$ Adds an object to the "todos" variable
      //$ {id:# , name:"userInput", complete: Boolean}
      return [...todos, newToDo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((td) => {
        //$ We toggle between {complete: true} and {complete: false}
        //$ If false, the text goes gray. If true, text is black
        if (td.id === action.payload.id)
          return { ...td, complete: !td.complete };
        return td;
      });
    case ACTIONS.DELETE_TODO:
      //$ Removes the entry from the the "todos" variable
      return todos.filter((td) => td.id !== action.payload.id);
    default:
      return todos;
  }
}
//^ MAIN COMPONENT FUNCTION
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSubmit = function (e) {
    e.preventDefault();
    //$ call reducerFn and give it the stateful name variable through the payload
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName(""); // clear input field
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </React.Fragment>
  );
}
