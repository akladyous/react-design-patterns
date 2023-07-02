import UserFetcher from './UserFetcher';

export default function FunctionAsChildTwoDemo() {
  return (
    <main className='border mx-auto w-2/4 my-3'>
      <UserFetcher userId={1}>
        {({ user, loading, error }) => (
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : user ? (
              <div>
                <h2>{user.name}</h2>
                <code>
                  <pre>{JSON.stringify(user, null, 2)}</pre>
                </code>
              </div>
            ) : null}
          </div>
        )}
      </UserFetcher>
    </main>
  );
}
