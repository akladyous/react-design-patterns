import { photos } from '../data/photos';
export function fetchData(timeout = 3000) {
  return new Promise((resolve) => {
    resolve({ photos });
    setTimeout(() => {}, timeout);
  });
}
