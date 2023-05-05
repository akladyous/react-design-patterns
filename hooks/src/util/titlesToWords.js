import { photos } from '../data/photos';

export const titleToWords = () => {
  const _words = photos
    .map((p) => p.title)
    .join(' ')
    .split(' ');
  for (let i = _words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [_words[i], _words[j]] = [_words[j], _words[i]];
  }
  // (Math.floor(Math.random() * (i + 1)) / 2) * Math.sqrt(i + j);
  return _words;
};
