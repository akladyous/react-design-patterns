import { useState } from 'react';

export default function BasicCounter() {
  const [counter, setCounter] = useState(0);

  console.log("inside the component : 'Counter'", counter); // will always printout 1 less the actual value

  function increment(value) {
    setCounter((c) => c + 1);
  }

  function decrement(value) {
    setCounter((c) => c - 1);
  }

  return (
    <main className='border p-2 my-3' id='counter'>
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
