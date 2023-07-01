import { useState } from 'react';
import withUser from '../component/withUser';

const WithUser = withUser(Component, userId);

export default function HigherOrderComponentFiveDemo() {}

const RandomUserID = () => {
  const [randomNum, setRandomNum] = useState(0);
  const generateRandomID = (min = 1, max = 10) => {
    return Math.floor(Math.random()(max - min + 1) + min);
  };

  return (
    <section className='w-3/5 border my-3 p-3 mx-auto'>
      <p>{randomNum}</p>

      <button onClick={generateRandomID}>Random ID</button>
    </section>
  );
};
