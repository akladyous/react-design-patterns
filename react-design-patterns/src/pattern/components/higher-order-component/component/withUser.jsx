import { useEffect, useState } from 'react';

export default function withUser(Component, userId) {
  return function WithUserByID(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const controller = new AbortController();
      const fetchData = async () => {
        try {
          const response = fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            { signal: controller.signal },
          );
          if (!response.ok) {
            setError(error);
          } else {
            const data = (await response).json();
            setUser(data);
          }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
      return () => controller.abort();
    }, [userId]);

    return (
      <Component user={user} isLoading={loading} error={error} {...props} />
    );
  };
}
