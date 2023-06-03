import { useContext, createContext, useState } from 'react';
const CounterContext = createContext(0);

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((v) => v + 1);
  };
  const decrement = () => {
    setCount((v) => v - 1);
  };
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
const CounterComponent = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <main className='border p-2 my-3' id='counter'>
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
};
export default function CounterProviderComponent() {
  return (
    <div>
      <CounterProvider>
        <CounterComponent />
      </CounterProvider>
    </div>
  );
}
