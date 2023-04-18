import UsersProvider from './UsersProvider';
import UsersConsumer from './UsersConsumer';

export default function ContextDemo() {
  return (
    <div>
      ContextDemo
      <UsersProvider>
        <UsersConsumer />
      </UsersProvider>
    </div>
  );
}
