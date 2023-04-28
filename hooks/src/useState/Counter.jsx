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
    <main
      className='border p-2 my-3'
      id='counter'
    >
      <p className='text-center'>{counter}</p>
      <div className='flex'>
        <button
          className='border rounded-md bg-slate-100 px-5 mx-auto'
          onClick={increment}
        >
          +
        </button>
        <button
          className='border rounded-md bg-slate-100 px-5 mx-auto'
          onClick={decrement}
        >
          -
        </button>
      </div>
    </main>
  );
}
