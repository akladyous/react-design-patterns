'use client';

import { generateFakeUsers } from '@/lib/fakeUsers';
import { useEffect, useState } from 'react';

export const withUser = (Component, user_id) => {
  return (props) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
      (async () => {
        const users = await generateFakeUsers();
        if (users) {
          const _user = users.find((u) => (u.id = user_id));
          setUser(_user);
        }
      })();
    }, [user_id]);

    return (
      <Component
        user={user}
        {...props}
      />
    );
  };
};
