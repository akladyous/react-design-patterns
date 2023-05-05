import {
  lazy,
  useEffect,
  useRef,
  useState,
  useTransition,
  Suspense,
} from 'react';
// import ImagesList from './ImagesList';
const ImagesList = lazy(() => import('./ImagesList'));

export default function UseTransition() {
  const [query, setQuery] = useState('');
  const rerenderCount = useRef(0);

  useEffect(() => {
    rerenderCount.current++;
  });
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className='w-[80%]'>
      <div>
        <div className='flex justify-between align-middle'>
          <label
            htmlFor='photo'
            className='block text-sm font-medium leading-6 text-gray-900 capitalize'
          >
            search albums
          </label>
          <span className=' text-sm'>
            &lt;Rerender Count &nbsp;{' '}
            <span className='border-yellow-100 bg-yellow-100 rounded-full p-1 text-yellow-900 text-sm font-bold'>
              {rerenderCount.current}
            </span>{' '}
            &gt;
          </span>
        </div>

        <div className='mt-2'>
          <input
            id='photo'
            name='photo'
            type='text'
            value={query}
            onChange={handleChange}
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem]'
            placeholder='first name'
          />
        </div>
      </div>
      <Suspense fallback={<p className=' text-blue-700'>loading...</p>}>
        <ImagesList query={query} />
      </Suspense>
    </section>
  );
}
