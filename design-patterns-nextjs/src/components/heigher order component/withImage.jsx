import { useEffect, useState } from 'react';

export const withImage = (Component, options) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const response = await fetch(url);
    })();

    return () => {
      controller.abort();
    };
  }, [url]);
};
