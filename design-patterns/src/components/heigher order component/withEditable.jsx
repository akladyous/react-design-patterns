import { generateFakeUsers } from '@/lib/fakeUsers';
import { useEffect } from 'react';

export const withEditable = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [oridinalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      if (!(resourcePath | resourceName))
        return undefined(async () => {
          const response = await generateFakeUsers();
          // const responseData = await response.json();
          const resourceData = response.find((u) => (u.id = resourceName));
          setOriginalData(resourceData);
          setData(resourceData);
        })();
    }, [resourcePath, resourceName]);

    const onChange = (_changes) => {
      setData({ ...data, ..._changes });
    };
  };
};
