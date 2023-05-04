import { Suspense, useState, useDeferredValue, useEffect } from 'react';
import SearchResults from './SearchResults';
import QueryData from './QueryData';

function Loader() {
  console.log('loader');
  return <h2>🌀 Loading...</h2>;
}
export default function DeferedDemo() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <section className='w-[80%]'>
      <div>
        <label
          htmlFor='photo'
          className='block text-sm font-medium leading-6 text-gray-900 capitalize'
        >
          search albums
        </label>
        <div className='mt-2'>
          <input
            id='photo'
            name='photo'
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
            placeholder='first name'
          />
        </div>
        <div className='my-2 p-2 border rounded-md'>
          <Suspense fallback={Loader}>
            {/* <SearchResults query={query} /> */}
            <QueryData query={query} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
DeferedDemo.displayName = 'DeferedDemo';
