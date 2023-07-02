import withEditableUser from '../component/withEditableUser';

const UserForm = ({
  user,
  isLoading,
  error,
  onChangeUser,
  onSaveUser,
  onResetUser,
}) => {
  if (!user) {
    return null;
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p>{error ? error : ''}</p>
      </section>
    );
  }
  const handleChange = (e) => {
    onChangeUser({ [e.target.name]: e.target.value });
  };

  return (
    <section className='border w-3/5 m-4 p-2 mx-auto'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-3'>
          <label
            htmlFor='name'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Name
          </label>
          <div className='mt-2'>
            <input
              type='name'
              name='name'
              id='name'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleChange}
              value={user['name']}
            />
          </div>
        </div>
        {/*  */}
        <div className='mb-3'>
          <label
            htmlFor='username'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            User Name
          </label>
          <div className='mt-2'>
            <input
              type='username'
              name='username'
              id='username'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleChange}
              value={user['username']}
            />
          </div>
        </div>
        {/*  */}
        <div className='mb-3'>
          <label
            htmlFor='email'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Email
          </label>
          <div className='mt-2'>
            <input
              type='email'
              name='email'
              id='email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleChange}
              value={user['email']}
            />
          </div>
        </div>
      </form>

      <div className='flex items-center justify-between'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='button'
          onClick={onResetUser}
        >
          Reset
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='button'
          onClick={onSaveUser}
        >
          Save
        </button>
      </div>
    </section>
  );
};

const EditableUser = withEditableUser(UserForm, 1);
const HigherOrderComponentSixDemo = () => {
  return <EditableUser />;
};

export default HigherOrderComponentSixDemo;

const u1 = {
  id: 1,
  name: 'John Doe',
  username: 'johnDoe',
  email: 'john_doe@april.biz',
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
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};
