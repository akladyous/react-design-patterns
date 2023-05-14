import { URLPattern } from 'next/server';
import { useEffect, useState } from 'react';

export default function ContainerComponent({ children, id }) {
  const [user, setUser] = useState();

  useEffect(() => {
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

  if (!data) return undefined;

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
