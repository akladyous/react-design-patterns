export default function Counter() {
  return (
    <>
      <main className='border p-2 my-3 mx-5'>
        <div className='text-center pb-2 border max-w-fit mx-auto px-4 rounded-lg'>
          <p>counter component</p>
        </div>
        <div
          className=''
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
        </div>
      </main>
      ;
    </>
  );
}
