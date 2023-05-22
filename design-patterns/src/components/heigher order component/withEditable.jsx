import { generateFakeUsers } from '@/lib/fakeUsers';
import { useEffect } from 'react';

const capitalize = (str) => (str ? str.charAt(0).toUpperCase().slice(1) : null);

export const withEditable = (Component, resourcePath, resourceName) => {
  // resourcePath = /users/1234
  // resourceName = 'user'

  return (props) => {
    const [oridinalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      if (!(resourcePath | resourceName))
        return (async () => {
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

    const onSave = async () => {
      const response = await fetch(`some url/${resourcePath}/${resourceName}`, {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        const _data = await response.json();
        setOriginalData(_data);
        setData(_data);
      }
    };

    const onReset = () => {
      setData(oridinalData);
    };

    if (!data && oridinalData) return undefined;

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
