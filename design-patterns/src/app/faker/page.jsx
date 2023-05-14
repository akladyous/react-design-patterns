import { generateFakeUsers, sampleUser } from '@/lib/fakeUsers';

export default async function Faker(props) {
  const user = await generateFakeUsers();
  console.log(user.length);
  return (
    <>
      <section>
        <h3>Faker Home Page</h3>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </section>
    </>
  );
}
