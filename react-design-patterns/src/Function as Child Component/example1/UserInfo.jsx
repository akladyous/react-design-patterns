import UserFetcher from './UserFetcher';

export default function UserInfo() {
  return (
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
  );
}
