import React, { useContext, useEffect, useState } from 'react';

const usersContext = useContext(null);

export default function UsersProvider() {
  const [users, setUsers] = useState(null);

  async function getUsers() {}

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://jsonplaceholder.typicode.com/users', {
      cache: 'only-if-cached',
      signal: controller.signal,
      headers: { 'Content-Type': 'Json' },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((e) => {
        e instanceof TypeError && e.message === 'Failed to fetch'
          ? { status: 504 }
          : Promise.reject(e);
      })
      .finally(controller.abort('request completed'));
  }, []);

  return <div>UsersProvider</div>;
}
