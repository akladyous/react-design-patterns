'use client';

import { useState } from 'react';

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  const incCount = (v) => setCount((_count) => (_count + v ? v : 1));
  const decCount = (v) => setCount((_count) => (_count - v ? v : 1));

  return <>{render(count, setCount)}</>;
};

export default function RenderPropsHome({ children }) {
  return (
    <section>
      <h3>Render Props PAge</h3>

      <div>
        <button
          id='myButton'
          className='rounded-lg bg-violet-700'
          ref={mouseRef}
        >
          Save Changes
        </button>
      </div>
      <div>{children}</div>
    </section>
  );
}
