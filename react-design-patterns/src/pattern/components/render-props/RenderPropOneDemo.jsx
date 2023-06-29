import RenderPropOne from './RenderPropOne';

export default function RenderPropOneDemo({ counter, increment, decrement }) {
  return (
    <RenderPropOne
      render={(counter, increment, decrement) => {
        return (
          <main className='border-2 border-red-500 p-2 my-3 w-1/3 mx-auto'>
            <h4 className='text-center'>Counter One</h4>

            <div className='' id='counter'>
              <div className='flex my-2'>
                <button
                  className='border rounded-md bg-slate-100 px-5 mx-auto'
                  onClick={(_e) => {
                    increment(value);
                  }}
                >
                  +
                </button>
                <p className='border rounded-lg text-center max-w-fit px-4'>
                  {counter}
                </p>
                <button
                  className='border rounded-md bg-slate-100 px-5 mx-auto'
                  onClick={(_e) => {
                    decrement(value);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </main>
        );
      }}
    />
  );
}
