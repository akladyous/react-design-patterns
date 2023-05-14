'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { generateFakeUsers } from '@/lib/fakeUsers';

export default function ContainerComponent({ children, id }) {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!id) return;
    (async () => {
      // const baseURL = 'https://jsonplaceholder.typicode.com/users';
      // const url = id ? baseURL.concat('/', id) : baseURL;
      // const response = await fetch(url);
      // if (!response.ok) {
      //   return;
      // }
      // setUser(await response.json());

      const users = await generateFakeUsers(4000);
      const currentUser = users.find((_user) => (_user.id = id));
      setUser(currentUser);
    })();
  }, [id]);

  if (!user) return undefined;

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(children, { user });
        }
        return children;
      })}
    </>
  );
}
