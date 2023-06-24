import { useState } from 'react';

export default function CounterOne(props) {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((v) => v + 1);
  const decrement = () => setCounter((v) => v - 1);

  return (
    <section id='counterOne' className='border p-2 my-3 w-2/3 mx-auto'>
      <div className='flex'>
        <button
          className='border rounded-md bg-slate-100 px-5 mx-auto'
          onClick={increment}
        >
          +
        </button>
        <p className='text-center'>{counter}</p>
        <button
          className='border rounded-md bg-slate-100 px-5 mx-auto'
          onClick={decrement}
        >
          -
        </button>
      </div>
    </section>
  );
}
