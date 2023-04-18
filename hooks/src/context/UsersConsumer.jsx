import { usersState } from './UsersProvider';

export default function UsersConsumer() {
  const { users, getUsers } = usersState();

  if (users === null || users === undefined) return;
  return (
    <div className='mx-5'>
      <h4>Users List</h4>
      <button onClick={getUsers}>get Users</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
