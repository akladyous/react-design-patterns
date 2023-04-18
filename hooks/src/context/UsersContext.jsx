import React, { useContext, useEffect, useRef, useState } from 'react';

const UsersContext = useContext(undefined);
export const usersState = () => useContext(UsersContext);
export default function UsersProvider({ children }) {
  const [users, setUsers] = useState(null);
  const usersStateTrigger = useRef(false);
  const getUsers = () => {
    usersStateTrigger.current = true;
  };

  useEffect(() => {
    const controller = new AbortController();
    if (usersStateTrigger) {
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
      controller.abort();
      usersStateTrigger.current = false;
    };
  }, []);

  return (
    <UsersContext.Provider value={{ users, getUsers }}>
      <>{children}</>
    </UsersContext.Provider>
  );
}
