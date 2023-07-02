import { useEffect, useState } from 'react';

export default function withEditableUser(Component, userId) {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(nulll);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      let isMounted = false;
      const controller = new AbortController();
      const fetchData = async () => {
        if (!userId) {
          return void 1;
        }

        setLoading(true);

        try {
          const response = await fetch(`url/${userId}`, {
            signal: controller.signal,
          });
          if (!response.ok) {
            setError('Error Fetching data');
          } else {
            const data = await response.json();
            setUser(data);
            setOriginalUser(data);
          }
        } catch (error) {
          if (!error.name === 'AbortError') {
            setError(error.message);
          }
        } finally {
          if (!controller.signal.aborted) {
            setLoading(false);
          }
        }
      };

      return () => {
        controller.abort();
      };

      fetchData();
    }, [userId]);

    return (
      <Component user={user} isLoading={loading} error={error} {...props} />
    );
  };
}
