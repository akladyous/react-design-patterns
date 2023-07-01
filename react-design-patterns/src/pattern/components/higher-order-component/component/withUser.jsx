import { useEffect, useRef, useState } from 'react';

export default function withUser(Component, userId) {
  return function WithUserByID(props) {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const controllerRef = useRef(new AbortController()); // maintains a consistent reference to the AbortController instance throughout the component's lifecycle.

    useEffect(() => {
      setCount((c) => c + 1);
      const controller = new AbortController();
      var active = true;

      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://swapi.dev/api/people/${userId}`,
            { signal: controller.signal },
          );

          if (!response.ok) {
            setError('Error occurred while fetching user data');
          } else {
            const data = await response.json();
            setUser(data);
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      // if (userId)
      fetchData();

      console.group('=- useEffect -=');
      console.log('user    : ', user);
      console.log('loading : ', loading);
      console.log('error   : ', error);
      console.log('active  : ', active);
      console.log('count   : ', count);
      console.groupEnd();
      return () => {
        if (!loading) {
          controller.abort();
        }
        active = false;
        console.group('cleanup function');
        console.log('user    : ', user);
        console.log('loading : ', loading);
        console.log('error   : ', error);
        console.log('active  : ', active);
        console.log('count   : ', count);
        console.groupEnd();
      };
    }, [userId]);

    return (
      <Component user={user} isLoading={loading} error={error} {...props} />
    );
  };
}

/*
console.group('useEffect');
console.log('user    : ', user);
console.log('loading : ', loading);
console.log('error   : ', error);
console.log('active  : ', active);
console.groupEnd();
*/
