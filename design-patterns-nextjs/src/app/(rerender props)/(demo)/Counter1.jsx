/* eslint-disable react/button-has-type */
import { useEffect } from "react";

export default function Counter1(props) {
  useEffect(() => {
    console.log("Counter1");
  });
  return (
    <>
      <button onClick={props.increment}>+</button>
      <span>{props.counter}</span>
      <button onClick={props.decrement}>-</button>
    </>
  );
}
