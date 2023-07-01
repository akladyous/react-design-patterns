import { useEffect, useRef, useState } from 'react';

export default function withUser(Component, userId) {
  return function WithUserByID(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const controllerRef = useRef(new AbortController()); // maintains a consistent reference to the AbortController instance throughout the component's lifecycle.

    useEffect(() => {
      const controller = new AbortController();
      var active = true;

      const fetchData = async () => {
        if (!userId) {
          setLoading(false);
          return;
        }
        try {
          const response = await fetch(
            `https://swapi.dev/api/people/${userId}`,
            { signal: controller.signal },
          );

          if (!response.ok) {
            setError('Error occurred while fetching user data');
          } else {
            const data = await response.json();
            if (active) {
              setUser(data);
            }
          }
        } catch (error) {
          if (error.name === 'AbortError') {
            return;
          }
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();

      return () => {
        if (!loading) {
          controllerRef.current.abort();
        }
        active = false;
      };
    }, [userId]);

    return (
      <Component user={user} isLoading={loading} error={error} {...props} />
    );
  };
}
