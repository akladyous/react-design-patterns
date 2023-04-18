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
const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
export default function CounterContext() {
  return (
    <div>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}
