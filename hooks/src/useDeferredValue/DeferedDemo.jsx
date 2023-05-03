import { Suspense, useState, useDeferredValue } from 'react';
import SearchResults from './SearchResults';

export default function DeferedDemo() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <section className='w-1/3'>
      <div>
        <label
          htmlFor='firstName'
          className='block text-sm font-medium leading-6 text-gray-900 capitalize'
        >
          search albums
        </label>
        <div className='mt-2'>
          <input
            id='firstName'
            name='firstName'
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
            placeholder='first name'
          />
        </div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResults query={deferredQuery} />
        </Suspense>
      </div>
    </section>
  );
}
