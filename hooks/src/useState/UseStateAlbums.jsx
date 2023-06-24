import { albums as albumsData } from '../data/albums';

export default function UseStateAlbums() {
  const [albums, setAlbums] = useState(albumsData);
}
