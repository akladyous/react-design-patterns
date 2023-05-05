import { useEffect, useRef, useState, useTransition } from 'react';
import { fetchData } from '../util/fetchData';
import { photos } from '../data/photos';

export default function UseTransition() {
  const [words, setWords] = useState([]);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const rerenderCount = useRef(0);

  useEffect(() => {
    rerenderCount.current++;
  });
  const handleChange = (e) => {
    setQuery(e.target.value);
    startTransition(() => {
      const _words = photos
        .map((p) => p.title)
        .join(' ')
        .split(' ');
      for (let i = _words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [_words[i], _words[j]] = [_words[j], _words[i]];
      }
      //   (Math.floor(Math.random() * (i + 1)) / 2) * Math.sqrt(i + j);
      setWords(_words);
    });
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
        <div className='my-2 p-2 border rounded-md'>
          <ul>
            {isPending ? <p className=' text-orange-500'>loading...</p> : null}
            {words
              .filter((word) => word.startsWith(query))
              .map((word) => (
                <li key={crypto.randomUUID()}>{word}</li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
