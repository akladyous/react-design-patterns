import ListItems from '../component/ListItems';
import { usersData } from '../../../../data/users';

export default function UserList({ children }) {
  return (
    <section className='border-green-500 border-2 m-2 p-2 min-h-screen'>
      <ListItems
        items={usersData}
        resourceName='user'
        itemComponent={UserLink}
      />
    </section>
  );
}

function UserLink({ user }) {
  return (
    <div className='px-2 my-1 border hover:text-amber-900'>
      <p>{user.name}</p>
    </div>
  );
}
