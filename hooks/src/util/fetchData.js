import { photos } from '../data/photos';
export function fetchData(timeout = 3000) {
  console.log(new Date().toISOString());
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ photos });
      console.log(new Date().toISOString());
    }, timeout);
  });
}
