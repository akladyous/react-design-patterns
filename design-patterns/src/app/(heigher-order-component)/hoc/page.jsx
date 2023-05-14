'use client';

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
    <section>
      <UserPrettified />
    </section>
  );
}
