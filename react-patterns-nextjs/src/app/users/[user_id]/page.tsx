import { getUsers } from '@/lib/getUsers';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  props: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'User generateMetadata params : '.padEnd(50),
    props.params,
  );

  return { ...props, title: `user ${props.params.user_id}` };
}

export default async function User(props: Props) {
  console.log('\x1b[36m%s%s\x1b[0m', 'User: params'.padEnd(50), props);

  const userData: User = await getUsers(props.params.user_id);
  return (
    <>
      <section>
        <h4>User account</h4>
        <pre>
          <code>
            {userData
              ? JSON.stringify(userData, null, 2).replace(/["{[,\}\]]/g, '')
              : ''}
          </code>
        </pre>
      </section>
    </>
  );
}
