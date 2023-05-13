export default function UserInfo(user: User) {
  return (
    <div className='border border-lg'>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.website}</p>
      </div>
    </div>
  );
}
