import { useDeferredValue } from 'react';

export default function WordList({ query }) {
  const deferedQuery = useDeferredValue(query);
  return <section></section>;
}
