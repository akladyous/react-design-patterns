import UserProvider from './UsersProvider';
import UsersConsumer from './UsersConsumer';

export default function ContextDemo() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  return (
    <div>
      <UserProvider url={url}>
        <UsersConsumer />
      </UserProvider>

      {/* <CounterDemo /> */}
    </div>
  );
}
