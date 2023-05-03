import { useEffect, useState } from 'react';
import { fetchData } from './data';

export default function SearchResults({ query }) {
  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState(null);
  if (query === '') {
    return null;
  }
  const albums = use(fetchData(`/search?q=${query}`));
  if (albums.length === 0) {
    return (
      <p>
        No matches for <i>"{query}"</i>
      </p>
    );
  }

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://jsonplaceholder.typicode.com/photos', {
      signal: controller,
    })
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => {
        setError(errro);
        console.log(error);
      });
    return () => controller.abort();
  }, []);

  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
function use(promise) {
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
