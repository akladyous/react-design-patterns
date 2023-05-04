import { photos } from '../data/photos';
export function detchData(timeout = 3000) {
  return new Promise((resolve) => {
    resolve({ photos });
    setTimeout(() => {}, timeout);
  });
}
