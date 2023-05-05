import { useDeferredValue, useEffect, useTransition } from 'react';
import { fetchData } from '../util/fetchData';

export default function ImagesList({ query }) {
  const [photos, setPhotos] = useState([]);
  const [isPending, startTransition] = useTransition();
  const deferedQuery = useDeferredValue(query);

  useEffect(() => {
    setTimeout(() => {
      startTransition(() => {
        fetchData().then((data) => setPhotos(data.photos));
      });
    });
  }, []);
  return (
    <section>
      <div className='my-2 p-2 border rounded-md'>
        <ul>
          {isPending ? <p className=' text-orange-500'>loading...</p> : null}
          {photos
            .filter((photo) => photo.title.includes(query))
            .map((photo) => (
              <li key={photo.id}>{photo.title}</li>
            ))}
        </ul>
      </div>
    </section>
  );
}
