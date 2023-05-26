import { useState } from 'react';

export default function HookUseState() {
  const [counter, setCounter] = useState(0);

  const increment = setCounter((v) => v + 1);
  const decrement = setCounter((v) => v - 1);

  return (
    <>
      <div className='useState'>
        <button onClick={increment}>+</button>
        <p>{counter}</p>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}
