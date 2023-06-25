import { UserContext } from './UsersProvider';
import { useContext } from 'react';

export default function UsersConsumer() {
  const users = useContext(UserContext);

  return (
    <div>
      {users.map((user) => {
        return <p>{user.name}</p>;
      })}
    </div>
  );
}
