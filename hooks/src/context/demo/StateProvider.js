import { useContext, createContext, useEffect, useState } from 'react';

const UserStateContext = createContext();

export const useUserState = () => {
  return useContext(UserStateContext);
};

export default function StateProvider({ children }) {
  const [users, setUsers] = useState(null);
  const [status, setStatus] = useState(false);

  const getUsers = () => {
    setStatus(true);
  };

  useEffect(() => {
    const controller = new AbortController();
    if (status) {
      fetch('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        })
        .finally(() => {
          controller.abort();
        });
    }
    return () => {
      setStatus(false);
    };
  }, [status]);

  return (
    <UserStateContext.Provider value={{ users, getUsers }}>
      {children}
    </UserStateContext.Provider>
  );
}
