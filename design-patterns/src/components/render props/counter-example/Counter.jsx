import { useState } from 'react';

export default function Counter({ render, initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const incCount = () => {
    setCount((_count) => _count + 1);
  };
  const decCount = (v) => {
    setCount((_count) => _count - 1);
  };

  return <>{render(count, incCount, decCount)}</>;
}
