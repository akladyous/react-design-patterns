'use client';

export default function CounterTwo({ counter, increment, decrement }) {
  return (
    <>
      <main className='border-2 border-red-500 p-2 my-3 w-1/3 mx-auto'>
        <h4 className='text-center'>Counter One</h4>

        <div
          className=''
          id='counter'
        >
          <div className='flex my-2'>
            <button
              className='border rounded-md bg-slate-100 px-5 mx-auto'
              onClick={increment}
            >
              +
            </button>
            <p className='border rounded-lg text-center max-w-fit px-4'>
              {counter}
            </p>
            <button
              className='border rounded-md bg-slate-100 px-5 mx-auto'
              onClick={decrement}
            >
              -
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
