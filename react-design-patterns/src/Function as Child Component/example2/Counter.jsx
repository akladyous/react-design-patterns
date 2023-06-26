import './counter.css';
import { useEffect, useState } from 'react';

function CounterLogic({ children }) {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((v) => v + 1);
  const decrement = () => setCounter((v) => v - 1);
  return children({ counter, increment, decrement });
}

export default function Counter() {
  useEffect(() => {
    const incrementButton = document.querySelector('.increment');
    const computedStyle = window.getComputedStyle(incrementButton);
    console.log(computedStyle.border);
    console.log('computed width  : ', incrementButton.clientWidth);
    console.log('computed height : ', incrementButton.clientHeight);
  }, []);
  return (
    <>
      <CounterLogic>
        {({ counter, increment, decrement }) => (
          <main className='counter-main'>
            <h1>Counter Component</h1>
            <div className='counter'>
              <button className='increment' onClick={increment}>
                increment
              </button>
              <p>{counter}</p>
              <button className='decrement' onClick={decrement}>
                decrement
              </button>
            </div>
          </main>
        )}
      </CounterLogic>
    </>
  );
}
