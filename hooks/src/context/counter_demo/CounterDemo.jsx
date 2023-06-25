import { createContext, useContext, useState } from 'react';

const MyCounterProvider = createContext();
// const useCounter = useContext(CounterProvider);

function CounterProviderTwo({ children }) {
  const [counter, setCounter] = useState(0);

  const increment = (_event, incrementBy = 1, ...args) => {
    setCounter((value) => value + incrementBy);
  };
  const decrement = (_event, decrementBy = 1) =>
    setCounter((value) => value - decrementBy);
  const reset = () => setCounter(0);

  return (
    <MyCounterProvider.Provider
      value={{ counter, increment, decrement, reset }}
    >
      {children}
    </MyCounterProvider.Provider>
  );
}

function CounterComponentTwo(props) {
  const [incrementValue, setIncrementValue] = useState(1);
  const { counter, increment, decrement, reset } =
    useContext(MyCounterProvider);
  return (
    <main className='border p-2 my-3 mx-5'>
      <div className='text-center pb-2 border max-w-fit mx-auto px-4 rounded-lg'>
        <p>counter</p>
      </div>
      <div
        className=''
        id='counter'
      >
        <p className='text-center'>{counter}</p>
        <div className='flex'>
          <button
            className='border rounded-md bg-slate-100 px-5 mx-auto'
            onClick={(e) => {
              increment(e, incrementValue);
            }}
          >
            +
          </button>
          <input
            type='text'
            size={3}
            maxLength={1}
            value={incrementValue}
            onChange={(e) => {
              const num = parseInt(e.target.value);
              setIncrementValue((val) => (num >= 1 ? num : 1));
            }}
            className='rounded-md border-1 border-gray-300 text-center'
          />
          <button
            className='border rounded-md bg-slate-100 px-5 mx-auto'
            onClick={(e) => {
              decrement(e, incrementValue);
            }}
          >
            -
          </button>
        </div>
      </div>
    </main>
  );
}
export default function CounterDemo() {
  return (
    <>
      <CounterProviderTwo>
        <CounterComponentTwo />
      </CounterProviderTwo>
    </>
  );
}
