import withHover from '../component/withHover';

const PrettifyUser = () => {
  const user = {
    id: 1,
    name: 'Leanne Graham',
    userName: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };
  return (
    <div className='w-3/5 border m-3 p-2 mx-auto'>
      <pre>
        <p>{JSON.stringify(user, null, 2)}</p>
      </pre>
    </div>
  );
};

const UserPrettified = withHover(PrettifyUser);

export default function HigherOrderComponentTwoDemo() {
  return (
    <main>
      <UserPrettified />
    </main>
  );
}
