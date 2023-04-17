import { useState } from 'react';
let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

function MutateState({ props }) {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <section className='mx-5 my-3 border rounded-md'>
      <ul className='flex flex-col'>
        {artists.map((artist, index) => (
          <div className='flex m-1'>
            <li
              key={index}
              className='w-1/4 inline'
            >
              {artist.name} &nbsp;
            </li>
            <button className=' bg-slate-100 px-2 rounded-sm capitalize'>
              delete
            </button>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default MutateState;
