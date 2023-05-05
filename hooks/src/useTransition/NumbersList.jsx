import {
  useDeferredValue,
  useState,
  useTransition,
  useRef,
  useEffect,
} from 'react';

export default function NumbersList(_props) {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const rerenderCount = useRef(0);
  const [isPending, startTransition] = useTransition();
  const deferedValue = useDeferredValue(count);

  const bigArray = Array(2000)
    .fill(1)
    .map((el, i) => count + 2000 - 1);

  const handleClick = () => {
    setCount(count + 1);
    startTransition(() => {
      console.log('deferedValue : ', deferedValue);
      const filtered = [];
      setItems(filtered);
    });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    rerenderCount.current++;
  });

  return (
    <>
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
              placeholder='enter number'
            />
          </div>
        </div>
      </section>
      {/* ------------------------------- */}
      <section>
        <div className='my-2 p-2 border rounded-md'>
          {isPending ? <p className=' text-orange-500'>loading...</p> : null}
          <ul>
            {photos
              .filter((photo) => {
                return deferedQuery && deferedQuery.length > 0
                  ? photo.title.includes(deferedQuery)
                  : true;
              })
              .map((photo) => (
                <li key={photo.id}>{photo.title}</li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
