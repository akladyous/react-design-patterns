import React, { createContext, useContext, useEffect, useState } from 'react';

export const UsersContext = createContext(null);

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState(false);

  function getUsers() {
    setState(true);
  }

  useEffect(() => {
    const controller = new AbortController();
    if (state) {
      debugger;
      fetch('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => {
          console.log(error);
          // e instanceof TypeError && e.message === 'Failed to fetch'
          //   ? { status: 504 }
          //   : Promise.reject(e);
        })
        .finally(() => controller.abort('request completed'));
    }
    return () => {
      // controller.abort();
      setState(false);
    };
  }, [state]);

  return (
    <UsersContext.Provider value={{ users, getUsers }}>
      {children}
    </UsersContext.Provider>
  );
}
