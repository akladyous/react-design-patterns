type UserProps = {
  children: React.ReactNode;
  params: { user_id: string };
};

export default function UserHomeLayout(props: UserProps) {
  console.log('\x1b[36m%s%s\x1b[0m', 'UserLayout props : '.padEnd(50), props);

  return (
    <main
      id='userLayout'
      className='border-2 border-red-500 m-3 p-2 min-h-screen'
    >
      {props.children}
    </main>
  );
}
