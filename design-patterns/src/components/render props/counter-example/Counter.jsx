import { useState } from 'react';

export default function Counter({ render, initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const incCount = (v) => {
    let value = parseInt(v) || 1;
    setCount((_count) => _count + value);
  };
  const decCount = (v) => {
    let value = parseInt(v) || 1;
    setCount((_count) => _count - value);
  };

  return <>{render(count, incCount, decCount)}</>;
}
// Counter.shouldComponentUpdate = function (nextProps, nextState) {
//   console.log('nextProps : ', nextProps);
//   console.log('nextState : ', nextState);
// };
