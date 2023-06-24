import UsersProvider from './UsersProvider';
import UsersConsumer from './UsersConsumer';
import CounterDemo from './CounterDemo';

export default function ContextDemo() {
  return (
    <div>
      <UsersProvider>
        <UsersConsumer />
      </UsersProvider>
      {/* <CounterDemo /> */}
    </div>
  );
}
