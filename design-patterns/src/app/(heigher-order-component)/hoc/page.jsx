'use client';
import { EditUserForm } from './EditUserForm';
import { withUser } from '@/components/heigher order component/withUser';
import { withHover } from '@/components/heigher order component/withHover';

const PrettyPrintUser = (user) => {
  debugger;
  console.log('user : ', user);
  return (
    <div>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </div>
  );
};

const UserPrettified = withUser(PrettyPrintUser, 1);
const WithUserAndToolTip = withHover(withUser(PrettyPrintUser, 1));

export default function HOC() {
  return (
    <section className='mx-3 p-2'>
      <div className='w-1/2'>
        <WithUserAndToolTip />
      </div>
      <div className='w-1/2'>{/* <UserPrettified /> */}</div>
      <div className='w-1/2'>{/* <EditUserForm /> */}</div>
    </section>
  );
}
