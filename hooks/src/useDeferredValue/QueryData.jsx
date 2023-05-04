import { useState, useEffect } from 'react';
import { fetchData } from '../util/fetchData';

export default function QueryData({ query }) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    // debugger;
    if (query === '') return;
    const controller = new AbortController();
    controller.signal.addEventListener('abort', () => {
      console.log('%cERROR: The request has been aborted', 'color: red');
    });
    fetchData().then((data) => {
      setPhotos(data.photos);
    });

    return () => {
      console.log('%cCleanUp Function', 'color: orange; font-weight:');
      controller.abort('aborting fetch request on Component unMount');
    };
  }, [query]);
  if (!photos) return null;
  return (
    <section>
      <ul>
        {photos
          .filter((photo) => photo.title.includes(query))
          .map((photo) => (
            <li key={photo.id}>{photo.title}</li>
          ))}
      </ul>
    </section>
  );
}
