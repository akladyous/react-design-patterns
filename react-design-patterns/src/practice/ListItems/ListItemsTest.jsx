import { usersData } from '../../../data/users';
import ListItemsComponent from './ListItemsComponent';

export default function ListItemsTest({}) {
  <ListItemsComponent
    items={usersData}
    resourceName={'user'}
    itemComponent={UserInfoTest}
  />;
}

const UserInfoTest = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
      <a href={`/users/${user.id}`}></a>
    </div>
  );
};
