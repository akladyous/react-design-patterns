import { useState } from 'react';

function Counter({ children }) {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((v) => v + 1);
  const decrement = () => setCounter((v) => v - 1);
  return children({ counter, increment, decrement });
}

export default function Example2() {
  <Counter>
    {({ counter, increment, decrement }) => (
      <div className='couunter'>
        <button onClick={increment}></button>
        <p>{counter}</p>
        <button onClick={decrement}></button>
      </div>
    )}
  </Counter>;
}
