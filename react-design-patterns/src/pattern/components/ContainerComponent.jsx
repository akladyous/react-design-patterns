import React, { useEffect, useState } from 'react';

export default function ContainerComponent({ url, resourceName, children }) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setResource(data);
    })();
  });

  return (
    <>
      {React.Children(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: data });
        }
        return child;
      })}
    </>
  );
}
