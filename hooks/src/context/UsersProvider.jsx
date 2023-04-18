import React, { useContext, useEffect, useRef, useState } from 'react';

const UsersContext = useContext(undefined);
export const usersState = () => useContext(UsersContext);

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState(false);
  const getUsers = () => {
    setState(true);
  };

  useEffect(() => {
    const controller = new AbortController();
    if (state) {
      fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'only-if-cached',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((e) => {
          e instanceof TypeError && e.message === 'Failed to fetch'
            ? { status: 504 }
            : Promise.reject(e);
        })
        .finally(controller.abort('request completed'));
    }
    return () => {
      // controller.abort();
      setState(false);
    };
  }, [state]);

  return (
    <>
      <UsersContext.Provider value={{ users, getUsers }}>
        <>{children}</>
      </UsersContext.Provider>
    </>
  );
}
