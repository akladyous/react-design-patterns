import { useDeferredValue } from 'react';

export default function WordList({ query }) {
  const [photos, setPhotos] = useState([]);
  const deferedQuery = useDeferredValue(query);

  return <section>{}</section>;
}
