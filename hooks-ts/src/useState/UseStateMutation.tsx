import { useEffect, useState } from 'react';
import { usersData } from '../data/usersData';
type Props = {};

export default function UseStateMutation(_props: Props) {
  const [users, setUsers] = useState<User[]>(usersData);

  const deleteUser: deleteUserSignature = (_event, user) => {
    setUsers(users.filter((_user) => _user.id !== user.id));
  };
  useEffect(() => {
    console.log(users);
    return () => {};
  }, []);
  return (
    <section className='border p-2 my-3 mx-5'>
      <div>
        <ul className='flex flex-col'>
          {users.map((user) => {
            return (
              <div
                className='flex m-1'
                key={`${user.name}_${user.id}`}
              >
                <li className='w-1/4 inline'>{user.name}</li>
                <button
                  className=' bg-slate-100 px-2 rounded-sm capitalize'
                  onClick={(event) => {
                    deleteUser(event, user);
                  }}
                  // or
                  // onClick={() => {
                  //   setArtists(
                  //     artists.filter((_artist) => _artist.id !== user.id),
                  //   );
                  // }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
