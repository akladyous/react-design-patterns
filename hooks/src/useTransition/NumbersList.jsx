import {
  useDeferredValue,
  useState,
  useTransition,
  useRef,
  useEffect,
} from 'react';

export default function NumbersList(_props) {
  // const bigArray = [...Array(2000).keys()];
  const bigArray = [];
  for (let i = 0; i < 100000; i++) {
    bigArray.push(i.toString().padStart(6, '0'));
  }
  const [items, setItems] = useState(bigArray);
  const [query, setQuery] = useState('');
  const rerenderCount = useRef(0);
  const [isPending, startTransition] = useTransition();
  const deferedValue = useDeferredValue(query);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    rerenderCount.current++;
    startTransition(() => {
      const filtered = bigArray.filter((item) => {
        return deferedValue && deferedValue.length > 0
          ? item.includes(deferedValue)
          : true;
      });
      console.log(filtered.slice(0, 5));
      setItems(filtered);
    });
  }, [deferedValue]);

  return (
    <section className='w-[80%]'>
      <div>
        <div className='flex justify-between align-middle'>
          <label
            htmlFor='photo'
            className='block text-sm font-medium leading-6 text-gray-900 capitalize'
          >
            Search Number
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
      {/* ------------------------------- */}
      <div className='my-2 p-2 border rounded-md'>
        {isPending ? <Spinner /> : null}
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Spinner() {
  return <p className='font-bold text-orange-500'>loading...</p>;
}
