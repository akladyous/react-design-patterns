import { MouseEvent, useState } from 'react';
import {} from 'react';

type Props = {};

type OnClickHandler = {
  function<T = React.MouseEvent<HTMLButtonElement>>(event: T): void;
};

export default function UseState({}: Props) {
  const [counter, setCounter] = useState<number>(0);

  function increment(event: MouseEvent) {
    setCounter((value) => value + 1);
  }

  function decrement(event: MouseEvent) {
    setCounter((value) => value + 1);
  }

  type MySig = (event: React.MouseEvent<HTMLButtonElement>) => never;

  function prova(e: React.MouseEvent<HTMLButtonElement>): void {
    console.log();
  }
  return (
    <main>
      <main
        className='border p-2 my-3'
        id='counter'
      >
        <p className='text-center'>{counter}</p>
        <div className='flex'>
          <button
            className='border rounded-md bg-slate-100 px-5 mx-auto'
            onClick={increment}
          >
            +
          </button>
          <button
            className='border rounded-md bg-slate-100 px-5 mx-auto'
            onClick={decrement}
          >
            -
          </button>
        </div>
      </main>
    </main>
  );
}
