import React from "react";
// import { useEffect } from 'react';
// import Counter from "./Counter";
import CounterWrapper from "./CounterWrapper";
import Counter1 from "./Counter1";

export default function parent() {
  function callback(counter, increment, decrement) {
    return (
      <Counter1 counter={counter} increment={increment} decrement={decrement} />
    );
  }

  return (
    <>
      {/* <Counter initialCount={10} /> */}
      {/* <CounterWrapper render={callback} /> */}

      <CounterWrapper
        render={(counter, increment, decrement) => {
          return (
            <Counter1
              counter={counter}
              increment={increment}
              decrement={decrement}
            />
          );
        }}
        Com={Counter1}
      />

      {/* <MouseTracker /> */}
    </>
  );
}
