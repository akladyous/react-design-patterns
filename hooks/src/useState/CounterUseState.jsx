import React, { useEffect, useState } from 'react';

export default function CounterUseState() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('rerender');
    //   setCounter(counter + 1);
  }, []);

  console.log('inside component - COUNTER: ', counter); // will always printout 1 less the actual value

  function increment() {
    console.log(
      'Inside Event Handler - BEFORE : ',
      React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentDispatcher,
    );
    setCounter((count) => count + 1);
    console.log(
      'Inside Event Handler - AFTER : ',
      React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentDispatcher,
    );
    console.log("inside Event Handeler : 'Counter'", counter); // will always printout 1 less the actual value
  }
  function decrement() {
    setCounter((count) => count - 1);
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
