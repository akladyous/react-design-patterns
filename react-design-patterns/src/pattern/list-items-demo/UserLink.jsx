export default function UserLink({ user }) {
  return (
    <div className='px-2 my-1 border hover:text-amber-900'>
      <p>{user.name}</p>
    </div>
  );
}
