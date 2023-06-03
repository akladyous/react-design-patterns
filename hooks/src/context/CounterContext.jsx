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
    <div className='m-2'>
      <p className='inline'>{count}</p>
      <button onClick={increment} className=' mx-3 border rounded-md  px-2'>
        +
      </button>
      <button onClick={decrement} className=' mx-3 border rounded-md  px-2'>
        -
      </button>
    </div>
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
