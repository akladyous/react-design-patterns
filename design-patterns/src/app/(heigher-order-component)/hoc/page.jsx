'use client';
import { EditUserForm } from './EditUserForm';
import { withUser } from '@/components/heigher order component/withUser';

const PrettyPrintUser = (user) => {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </div>
  );
};

export default function HOC() {
  const UserPrettified = withUser(PrettyPrintUser, 1);
  return (
    <section className='mx-3 p-2'>
      <div>
        <UserPrettified />
      </div>
      <div className='w-1/2'>
        <EditUserForm />
      </div>
    </section>
  );
}
