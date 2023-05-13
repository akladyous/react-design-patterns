type ActiveUserLayoutProps = {
  children: React.ReactNode;
  params: { user_id: string };
};

export default function ActiveUserLayout(props: ActiveUserLayoutProps) {
  return (
    <section
      id='activeUserLayout'
      className='border-2 border-blue-500 m-3 p-2 min-h-screen'
    >
      <h4 className='px-2'>Active User Layout</h4>

      {props.children}
    </section>
  );
}
