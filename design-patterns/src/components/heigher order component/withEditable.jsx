import { useEffect } from 'react';

export const withEditable = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [oridinalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      if (!(resourcePath | resourceName)) return undefined(async () => {})();
    }, [resourcePath, resourceName]);
  };
};
