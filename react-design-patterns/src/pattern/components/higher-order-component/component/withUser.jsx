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
          if (!controller.signal.aborted) {
            setLoading(false);
          }
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
export const generateFakeUsers = async (
  timeout = 2000,
  totalRecords = 10,
  abortController,
) => {
  return new Promise((resolve, reject) => {
    if (timeout > 5000) reject(undefined);

    do {
      setTimeout(() => {
        const data = [];
        for (let i = 0; i < totalRecords; i++) {
          if (abortController.signal.aborted) {
            reject('Request aborted');
            return;
          }
          const sample = sampleUser();
          data.push({ ...sample, id: i + 1 });
        }
        resolve(data);
      }, timeout);
    } while (!abortController.signal.aborted);
  });
};
