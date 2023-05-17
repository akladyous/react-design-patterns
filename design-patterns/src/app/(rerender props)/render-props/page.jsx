'use client';

import Counter from '@/components/render props/counter-example/Counter';
import CounterOne from '@/components/render props/counter-example/CounterOne';
import CounterTwo from '@/components/render props/counter-example/CounterTwo';

export default function RenderPropsHome({ children }) {
  return (
    <section className='border m-2'>
      <h3 className='text-center'>Render Props PAge</h3>

      <Counter
        initialValue={10}
        render={(count, incCount, decCount) => {
          return (
            <CounterOne
              counter={count}
              increment={incCount}
              decrement={decCount}
            />
          );
        }}
      />
      <Counter
        initialValue={50}
        render={(count, incCount, decCount) => {
          return (
            <CounterTwo
              counter={count}
              increment={incCount}
              decrement={decCount}
            />
          );
        }}
      />
    </section>
  );
}
