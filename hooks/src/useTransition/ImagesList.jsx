import {
  useDeferredValue,
  useEffect,
  useTransition,
  useState,
  Suspense,
} from 'react';
import { fetchData } from '../util/fetchData';

export default function ImagesList({ query }) {
  const [photos, setPhotos] = useState([]);
  const [isPending, startTransition] = useTransition();
  const deferedQuery = useDeferredValue(query);

  useEffect(() => {
    startTransition(() => {
      setPhotos([]);
      fetchData().then((data) => {
        setPhotos(data.photos);
      });
    });
  }, []);
  return (
    <section>
      <div className='my-2 p-2 border rounded-md'>
        {isPending ? <p className=' text-orange-500'>loading...</p> : null}
        <ul>
          {photos
            .filter((photo) => {
              return deferedQuery && deferedQuery.length > 0
                ? photo.title.includes(deferedQuery)
                : true;
            })
            .map((photo) => (
              <li key={photo.id}>{photo.title}</li>
            ))}
        </ul>
      </div>
    </section>
  );
}
function Loading() {
  console.log('loading');
  return <p className=' text-orange-500'>loading...</p>;
}
