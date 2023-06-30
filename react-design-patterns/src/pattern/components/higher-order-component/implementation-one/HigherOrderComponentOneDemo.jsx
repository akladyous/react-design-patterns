import { useState } from 'react';
import withRandomNumber from '../component/withRandomNumbers';

const RandomNumnberHOC = withRandomNumber(DemoOne);

export default function HigherOrderComponentOneDemo() {
  return (
    <section className='border my-3 p-2 w-3/5 mx-auto'>
      <RandomNumnberHOC x={1} y={2} />
    </section>
  );
}

function DemoOne({ randomNumGenerator }) {
  const [randomNum, setRandomNum] = useState(0);

  const generateRandomNumber = () => {
    const n = randomNumGenerator(1, 100);
    setRandomNum(n);
  };
  return (
    <section className='bg-slate-50'>
      <h4>Higher Order Component</h4>
      <div>
        <p>{randomNum}</p>
        <button onClick={generateRandomNumber}>Random Number</button>
      </div>
    </section>
  );
}
