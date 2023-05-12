import { users } from '@/data/users';

export default function UsersHome({ children }: { children: React.ReactNode }) {
  return (
    <section className='border m-2 px-2'>
      <h3>Users List</h3>
      <div className='py-2'>
        {users.map((user: User) => {
          return (
            <p
              className='hover:text-amber-800 hover:bg-slate-200 max-w-fit hover:pr-4'
              key={crypto.randomUUID()}
            >
              {user.name}
            </p>
          );
        })}
      </div>
      {children}
    </section>
  );
}
