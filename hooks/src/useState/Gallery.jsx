import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button
        onClick={handleNextClick}
        className=' bg-slate-200 px-4 border rounded-md py-1 my-2'
      >
        Next
      </button>
      <h2>
        <i className='text-blue-600'>{sculpture.name} </i>
        by &nbsp;
        <span className=' text-green-800'>{sculpture.artist}</span>
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button
        onClick={handleMoreClick}
        className=' bg-slate-200 px-4 border rounded-md py-1 my-2'
      >
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
