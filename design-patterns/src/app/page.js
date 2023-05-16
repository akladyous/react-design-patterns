'use client';

import FunctionAsChild from './fas/page';

export default function Home({ children }) {
  return (
    <section
      id='home'
      className='min-h-screen mx-2 p-2 border'
    >
      <h3>Home Page</h3>

      <div className='border h-52 ml-2 my-2 p-2'>
        <h3>Function As Child</h3>

        <FunctionAsChild>{(text) => <strong>{text}</strong>}</FunctionAsChild>
      </div>
      {children}
    </section>
  );
}
