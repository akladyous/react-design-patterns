import { useState, useEffect, useRef } from 'react';

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  useEffect(() => {
    countRef.current = count;

    setTimeout(() => {
      console.group('useEffect');
      console.log('count: ', countRef.current);
      console.groupEnd();
    }, 1000);

    return () => {
      console.group('cleanup function');
      console.log('count: ', countRef.current);
      console.groupEnd();
    };
  }, []);

  return (
    <main className='border p-2 my-3' id='count'>
      <p className='text-center'>{count}</p>
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
