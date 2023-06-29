import React, { useState, useEffect } from 'react';

export default function ContainerComponentDemo({
  url,
  resourceName,
  children,
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          const errorData = await response.json();
          setError(errorData);
        }
      } catch (error) {
        console.error(error);
        setError('Failed to fetch data from server');
      }
    };
    fetchData();
  }, [url, resourceName]);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          React.cloneElement(child, { [resourceName]: data });
        }
      })}
    </>
  );
  return <></>;
}
