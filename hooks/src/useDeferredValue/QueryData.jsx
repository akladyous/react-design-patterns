import { useState, useEffect } from 'react';
import { fetchData } from '../util/fetchData';

export default function QueryData({ query }) {
  const [photos, setPhotos] = useState(null);
  console.group(QueryData.displayName);

  const controller = new AbortController();
  controller.signal.addEventListener('abort', () => {
    console.log('%cSignal Abort listner triggerd', 'color: red');
  });
  const cazzo = use(fetchData);
  useEffect(() => {
    if (query === '') return;
    fetchData()
      .then((data) => {
        setPhotos(data.photos);
      })
      .finally(console.log('%cSuccess!', 'color: green'));

    return () => {
      console.log('%cCleanUp Function', 'color: orange; font-weight:');
      controller.abort();
    };
  }, [query]);
  if (!photos) return null;
  return (
    <section>
      <ul>
        {photos
          .filter((photo) => photo.title.includes(query))
          .map((photo) => (
            <li
              className='border m-1 px-1'
              key={photo.id}
            >
              {photo.title}
            </li>
          ))}
      </ul>
    </section>
  );
}
QueryData.displayName = 'QueryData';

function use(promise) {
  debugger;
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      (result) => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      (reason) => {
        promise.status = 'rejected';
        promise.reason = reason;
      },
    );
    throw promise;
  }
}
