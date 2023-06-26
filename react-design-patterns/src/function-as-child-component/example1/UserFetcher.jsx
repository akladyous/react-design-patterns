import { useEffect, useState } from 'react';

export default function UserFetcher({ userId, children }) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return children({ user, loading, error });
}
