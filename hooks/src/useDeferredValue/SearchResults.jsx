import { useEffect, useState } from 'react';

export default function SearchResults({ query }) {
  console.group(SearchResults.displayName);
  const [photos, setPhotos] = useState(null);
  const controller = new AbortController();
  controller.signal.addEventListener('abort', () => {
    console.log('%cThe request has been aborted', 'color: red');
  });
  useEffect(() => {
    console.log(
      `%cComponentDidMount ${SearchResults.displayName}`,
      'color: green; font-weight: bold',
    );
    if (query === '') return;

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
      controller.abort();
    };
  }, [query]);

  if (!photos) return null;
  console.groupEnd();
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
SearchResults.displayName = 'SearchResults';
