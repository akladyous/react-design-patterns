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
    <>
      <div className='counter-component'>
        <button className='counter-btn' onClick={increment}>
          +
        </button>
        <p>{counter}</p>
        <button className='counter-btn' onClick={decrement}>
          -
        </button>
      </div>
    </>
  );
}
