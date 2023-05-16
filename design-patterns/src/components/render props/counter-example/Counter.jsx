import { useState } from 'react';

export default function Counter({ render }) {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount((_count) => _count + 1);
  };
  const decCount = (v) => {
    setCount((_count) => _count - 1);
  };

  return <>{render(count, incCount, decCount)}</>;
}
