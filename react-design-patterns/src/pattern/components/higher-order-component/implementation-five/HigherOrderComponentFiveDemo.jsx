import { useState } from 'react';
import withUser from '../component/withUser';

export default function HigherOrderComponentFiveDemo() {
  const [userId, setUserId] = useState(null);

  const handleClick = (e) => {
    const min = 1;
    const max = 10;
    const id = Math.floor(Math.random() * (max - min + 1) + min);
    setUserId(id);
  };

  const WithUser = withUser(RandomUser, userId);
  return (
    <section className='w-3/5 border my-3 p-3 mx-auto'>
      <div>
        <p>User ID {userId ? userId : null}</p>
        <button
          className='bg-slate-100 my-2 p-2 rounded-lg'
          onClick={handleClick}
        >
          Fetch Random User
        </button>
      </div>
      <WithUser />
    </section>
  );
}

const RandomUser = ({ user, isLoading, error }) => {
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.toString()}</p>;
  }
  // console.log(error);
  if (!user) {
    return null;
  }
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};
