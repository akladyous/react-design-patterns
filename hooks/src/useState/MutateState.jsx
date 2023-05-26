import { useState } from 'react';
let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
  { id: 3, name: 'Floralis Genérica' },
];

function MutateState({ props }) {
  const [artists, setArtists] = useState(initialArtists);

  function deleteByName(event, artist) {
    console.log(event.target);
    console.log('artist : ', artist);
    setArtists(artists.filter((_artist) => _artist.id !== artist.id));
  }

  return (
    <main className='border p-2 my-3'>
      <ul className='flex flex-col'>
        {artists.map((artist) => {
          return (
            <div className='flex m-1' key={`${artist.name}_${artist.id}`}>
              <li className='w-1/4 inline'>{artist.name}</li>
              <button
                className=' bg-slate-100 px-2 rounded-sm capitalize'
                onClick={(event) => {
                  deleteByName(event, artist);
                }}
                // or
                // onClick={() => {
                //   setArtists(
                //     artists.filter((_artist) => _artist.id !== artist.id),
                //   );
                // }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </main>
  );
}

export default MutateState;
