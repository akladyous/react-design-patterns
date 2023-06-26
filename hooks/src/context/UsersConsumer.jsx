import { UserContextProvider } from './UsersProvider';
import { useContext } from 'react';

export default function UsersConsumer() {
  const { data, loading } = useContext(UserContextProvider);

  return (
    <div>
      {data.map((user) => {
        return <p key={crypto.randomUUID()}>{user.name}</p>;
      })}
    </div>
  );
}
