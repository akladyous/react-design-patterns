import { useState } from 'react';
import { usersData } from '../data/users';

export default function UseStateUsers() {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (id, event) => {
    setUsers(users.filter((user) => user.id != id));
  };

  return (
    <section className='border w-2/3 p-2 my-2 mx-auto'>
      <div className=''>
        {users.map((user) => {
          return (
            <div className='my-1 flex justify-between' key={user.id}>
              <div>{user.name}</div>
              <div>
                <button className='' onClick={deleteUser.bind(this, user.id)}>
                  delete
                </button>
                <button className='ml-2'>update</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
