import { useEffect, useState } from 'react';

export default function withUser(Component, userId) {
  return function WithUserByID(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = fetch(`url/${userId}`);
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
    }, [userId]);

    return (
      <Component user={data} isLoading={loading} error={error} {...props} />
    );
  };
}
