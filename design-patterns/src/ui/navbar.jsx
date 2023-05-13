import Link from 'next/link';

export default function NavBar() {
  return (
    <header className='border-b h-12 py-2'>
      <nav className=' space-x-4'>
        <Link
          href='/'
          className='hover:bg-slate-300 p-2'
        >
          Home
        </Link>
        <Link
          className='hover:bg-slate-300 p-2 '
          href='/posts'
        >
          Posts
        </Link>

        <Link
          className='hover:bg-slate-300 p-2 '
          href='/users'
        >
          Users
        </Link>
      </nav>
    </header>
  );
}
