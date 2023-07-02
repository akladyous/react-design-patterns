import React, { useEffect, useState } from 'react';
//
export const withImage = (Component, options) => {
  return function WithImageComponent(props) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const controller = new AbortController();
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(options.url, {
            signal: controller.signal,
          });
          if (!response.ok) {
            setError('Failed to fetch image');
          } else {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setImage(imageUrl);
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();

      return () => {
        controller.abort();
      };
    }, [options.url]);

    return (
      <Component image={image} loading={loading} error={error} {...props} />
    );
  };
};
