import UserList from './pattern/list-items-component/UserList';

function App() {
  return (
    <main className='my-4'>
      <UserList />
    </main>
  );
}

export default App;

const Text = ({ text }) => <p>{text}</p>;
