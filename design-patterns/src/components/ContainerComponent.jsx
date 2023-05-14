import { useEffect, useState } from 'react';
import { generateFakeUsers } from '@/lib/fakeUsers';

export default function ContainerComponent({ children, id }) {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!id) return;
    (async () => {
      const baseURL = 'https://jsonplaceholder.typicode.com/users';
      const url = id ? baseURL.concat('/', id) : baseURL;
      const response = await fetch(url);
      if (!response.ok) {
        return;
      }
      setUser(await response.json());
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
