import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((count) => count + 1);
  }
  function decrement() {
    setCounter((count) => count - 1);
  }

  return (
    <div>
      <p>{counter}</p>
      <button
        className='border rounded-md bg-slate-100 px-5'
        onClick={increment}
      >
        +
      </button>
      <button
        className='border rounded-md bg-slate-100 px-5'
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
}
