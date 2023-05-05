import { photos } from '../data/photos';

const _words = photos
  .map((p) => p.title)
  .join(' ')
  .split(' ');
for (let i = _words.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [_words[i], _words[j]] = [_words[j], _words[i]];
}
