import ContainerComponent from '../component/ContainerComponent';

export default function ContainerComponentOneDemo() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  return (
    <>
      <ContainerComponent url={url} resourceName={'user'}>
        <UserInfo />
      </ContainerComponent>
    </>
  );
}

function UserInfo({ user }) {
  return (
    <>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </>
  );
}
