import { useState, useEffect, useCallback } from 'react';

export default function UseStateCounter(props) {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((v) => v + 1);
  }, []);
  const decrement = useCallback(() => {
    setCounter((v) => v - 1);
  }, []);

  useEffect(() => {
    console.log('reRender');
  }, []);

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
