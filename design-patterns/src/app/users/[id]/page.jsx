// 'use client';

import { getUserData } from '@/lib/getUserData';

export default async function UserInfo({ params: { id }, searchParams }) {
  const user = await getUserData(id);
  console.log('user : ', user);

  return user ? (
    <>
      <p>{JSON.stringify(user, null, 2)}</p>
    </>
  ) : null;
}
