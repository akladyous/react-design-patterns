import ListItems from '../components/list-items/ListItems';
import UserLink from '../list-items-demo/UserLink';
import { usersData } from '../../data/users';

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
