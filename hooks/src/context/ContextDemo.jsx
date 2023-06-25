import UsersProvider from './UsersProvider';
import UsersConsumer from './UsersConsumer';

export default function ContextDemo() {
  return (
    <div>
      <UsersProvider>
        <UsersConsumer />
      </UsersProvider>

      {/* <UsersProvider>
        <UsersConsumer />
      </UsersProvider> */}

      {/* <CounterDemo /> */}
    </div>
  );
}
