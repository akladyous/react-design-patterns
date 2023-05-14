import { faker } from '@faker-js/faker';
import { generateFakeUsers, sampleUser } from '@/lib/fakeUsers';

export default async function Faker(props) {
  // const randomName = faker.person.fullName(); // Rowan Nikolaus
  // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  // const female = faker.person.firstName('female');
  // const webSite = faker.internet.url({ protocol: 'https', appendSlash: false });
  // const user = sampleUser();
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
