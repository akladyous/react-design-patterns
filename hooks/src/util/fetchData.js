import { photos } from '../data/photos';
export function fetchData(timeout = 5000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ photos });
    }, timeout);
  });
}
