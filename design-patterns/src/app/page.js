'use client';

import { useState } from 'react';

export default function Home({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <section
      id='home'
      className='min-h-screen mx-2 p-2 border'
    >
      <h3>Home Page</h3>
      {children}
    </section>
  );
}
