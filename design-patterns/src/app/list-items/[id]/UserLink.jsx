'use client';

import Link from 'next/link';

export default function UserLink({ user }) {
  return (
    <>
      <div className='px-2 my-1 border hover:text-amber-900'>
        <Link href={`/list-items/${user.id}`}>{user.name}</Link>
      </div>
    </>
  );
}
