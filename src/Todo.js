import React from "react";
import { ACTIONS } from "./App.js";

//^ Grab props.todo and props.dispatch directly via destructuring the props object
export default function Todo({ todo, dispatch }) {
  //$ Run your reducerFn with the toggle_todo type
  const toggleFn = () => {
    return dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
    // the obj given to dispatch as an arg is the action in the reducerFn
  };
  //$ Run your reducerFn with the delete_todo type
  const deleteFn = () => {
    return dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
    // the obj given to dispatch as an arg is the action in the reducerFn
  };
  //$ If todo.complete is true, we color text black.
  //$ If todo.complete is false, color it a light gray
  const colorText = {
    color: todo.complete ? "orange" : "#000",
  };
  //% JSX -------------------------
  return (
    <div>
      <span style={colorText}>{todo.name}</span>
      <button onClick={toggleFn}>Toggle</button>
      <button onClick={deleteFn}>Delete</button>
    </div>
  );
}
