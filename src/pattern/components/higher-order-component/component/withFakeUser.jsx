import { generateFakeUsers } from '../../../../lib/fakeUsers';
import { useEffect, useState } from 'react';

export default function withFakeUser(Component, id) {
  return function WithUser(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
      if (!id) return null;

      (async () => {
        const users = await generateFakeUsers();
        if (users && Array.isArray(users)) {
          const userData = users.find((u) => u.id === id);
          if (userData) {
            setUser(userData);
          }
        }
      })();
    }, [id]);
    console.log('user : ', user);
    return <Component user={user} {...props} />;
  };
}
