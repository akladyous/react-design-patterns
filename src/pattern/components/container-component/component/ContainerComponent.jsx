import React, { useEffect, useState } from 'react';

export default function ContainerComponent({ url, resourceName, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const dataJson = await response.json();
        setData(dataJson);
      } else {
        const errorData = await response.json();
        setError(errorData);
      }
      try {
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: data });
        }
        return child;
      })}
    </>
  );
}
