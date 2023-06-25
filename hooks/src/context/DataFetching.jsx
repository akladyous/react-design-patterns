import { useEffect, useState } from 'react';

export default function DataFetching({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const controller = new AbortController();
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { signal: controller.signal },
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <>{children(data)}</>;
}
