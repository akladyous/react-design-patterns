'use client';

export default function UserData({ user }) {
  console.log('UserData user: ', user);
  return (
    <section>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </section>
  );
}
