import { photos } from '../data/photos';
export function fetchData(timeout = 3000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ photos });
    }, timeout);
  });
}
