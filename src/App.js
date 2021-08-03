import "./App.css";
import React, { useState, useReducer } from "react";
export default App;

function reducer(state, action) {
  console.log(state)
  console.log(action)
  // Increment or decrement our current count by 1
  if (action.type === "increment") return { count: state.count + 1 };
  if (action.type === "decrement") return { count: state.count - 1 };
  // If none of the above scenarios apply, return the state as is
  return state
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const plusOne = (prevCount) => dispatch({ type: "increment" });
  const minusOne = (prevCount) => dispatch({ type: "decrement" });
  return (
    <React.Fragment>
      <button onClick={minusOne}>-</button>
      <span>{state.count}</span>
      <button onClick={plusOne}>+</button>
      <span></span>
    </React.Fragment>
  );
}


