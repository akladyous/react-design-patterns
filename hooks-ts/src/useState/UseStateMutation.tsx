import { useEffect, useState } from 'react';
import { usersData } from '../data/usersData';

type Props = {};
type deleteUserSignature = {
  (event: React.MouseEvent<HTMLElement>, user: User): void;
};

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
      <div className='text-center pb-2 border max-w-fit mx-auto px-4 rounded-lg'>
        <p>State Mutation Component</p>
      </div>
      <div>
        <div>
          <button
            className='border bg-slate-200 p-2 rounded-lg'
            onClick={() => setUsers(usersData)}
          >
            Reset Users
          </button>
        </div>
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
