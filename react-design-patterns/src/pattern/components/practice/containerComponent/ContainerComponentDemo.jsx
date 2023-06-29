import React, { useState, useEffect } from 'react';

export default function ContainerComponentDemo({
  url,
  resourceName,
  children,
}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [url, resourceName]);
  return <></>;
}
