import { useEffect } from 'react';
import { fetchData } from '../util/fetchData';

export default function QueryData({ query }) {
  if (!query) return;
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setPhotos(data);
      })
      .catch((err) => console.log(err));
  }, [query]);
  if (!photos) return null;
  return (
    <section>
      <ul>
        {photos
          .filter((photo) => {
            debugger;
            photo.title.includes(query);
          })
          .map((photo) => (
            <li key={photo.id}>{photo.title}</li>
          ))}
      </ul>
    </section>
  );
}
