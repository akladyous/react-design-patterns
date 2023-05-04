import { useEffect, useState } from 'react';

export default function SearchResults({ query }) {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    // debugger;
    if (query === '') return;
    const controller = new AbortController();
    controller.signal.addEventListener('abort', () => {
      console.log('%cERROR: The request has been aborted', 'color: red');
    });

    fetch('https://jsonplaceholder.typicode.com/photos', {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(console.log('%cSuccess!', 'color: green'));
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
