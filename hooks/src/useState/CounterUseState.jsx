import React, { useEffect, useState, useCallback } from 'react';

export default function CounterUseState() {
  const [counter, setCounter] = useState(0);

  console.log('inside component - COUNTER            : ', counter);

  function increment() {
    console.log(
      'Inside Event Handler - BEFORE         : ',
      React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentDispatcher,
    );

    setCounter((count) => count + 1);

    console.log(
      'Inside Event Handler - AFTER          : ',
      React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentDispatcher,
    );

    console.log(
      "inside Event Handler - 'Counter'      : ",
      counter,
      ' will always printout 1 less the actual value',
    );
  }
  const decrement = useCallback(() => {
    console.log("inside Event Handler - 'useCallback'  : ");
    setCounter((count) => count - 1);
  }, []);

  useEffect(() => {
    console.log('Rerender...');
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
