import { users } from '../data/users';

export default function Users({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h3>Users List</h3>
      <div>
        {users.map((user) => {
          return <p key={crypto.randomUUID()}>{user.name}</p>;
        })}
      </div>
      {children}
    </section>
  );
}
