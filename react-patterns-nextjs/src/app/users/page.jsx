import Link from 'next/link';

export const metaData = {
  title: 'Users Home Page',
  description: 'welcome to users page',
};

export default async function UserHome(props) {
  const usersData = await getUsers();
  const users = await usersData;

  console.log('\x1b[36m%s%s\x1b[0m', 'UserHome props : '.padEnd(50), props);

  return (
    <section
      id='userPage'
      className='border-2 border-blue-500 px-2'
    >
      <h1>Users home page</h1>
      <div>
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className='px-2 my-1 border hover:text-amber-900'
            >
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
