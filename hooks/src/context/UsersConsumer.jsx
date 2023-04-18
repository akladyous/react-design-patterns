// import { usersState } from './UsersProvider';
import { UsersContext } from './UsersProvider';
import { useContext } from 'react';

export default function UsersConsumer() {
  const { users, getUsers } = useContext(UsersContext);

  if (users === null || users === undefined) return;

  return (
    <div className='mx-5'>
      <h4>Users List</h4>
      <button
        className='bg-slate-200 px-2 rounded-md'
        onClick={getUsers}
      >
        get Users
      </button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
