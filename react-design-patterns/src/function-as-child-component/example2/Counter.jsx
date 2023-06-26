import { useState } from 'react';

function CounterLogic({ children }) {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((v) => v + 1);
  const decrement = () => setCounter((v) => v - 1);
  return children({ counter, increment, decrement });
}

export default function Counter() {
  // useEffect(() => {
  //   const incrementButton = document.querySelector('.increment');
  //   const computedStyle = window.getComputedStyle(incrementButton);
  //   console.log(computedStyle.border);
  //   console.log('computed width  : ', incrementButton.clientWidth);
  //   console.log('computed height : ', incrementButton.clientHeight);
  // }, []);

  return (
    <>
      <CounterLogic>
        {({ counter, increment, decrement }) => (
          <main className='border mx-auto w-2/4'>
            <h1 className='text-center'>Counter Component</h1>
            <div className='flex p-2'>
              <button
                className='border rounded-md bg-slate-100 px-5 mx-auto'
                onClick={increment}
              >
                increment
              </button>
              <p>{counter}</p>
              <button
                className='border rounded-md bg-slate-100 px-5 mx-auto'
                onClick={decrement}
              >
                decrement
              </button>
            </div>
          </main>
        )}
      </CounterLogic>
    </>
  );
}
