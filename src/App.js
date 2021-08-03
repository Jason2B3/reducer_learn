import "./App.css";
import React, { useState, useReducer } from "react";
export default App;
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: " decrement",
};
function reducer(state, action) {
  switch(action.type){
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }; 
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const plusOne = (prevCount) => dispatch({ type: ACTIONS.INCREMENT });
  const minusOne = (prevCount) => dispatch({ type: ACTIONS.DECREMENT });
  return (
    <React.Fragment>
      <button onClick={minusOne}>-</button>
      <span>{state.count}</span>
      <button onClick={plusOne}>+</button>
      <span></span>
    </React.Fragment>
  );
}
