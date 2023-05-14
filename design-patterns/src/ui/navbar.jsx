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
          className='hover:bg-green-400 p-2'
          href='/faker'
        >
          Faker Test
        </Link>

        <Link
          className='hover:bg-slate-300 p-2 '
          href='/list-items'
        >
          List Items
        </Link>

        <Link
          className='hover:bg-slate-300 p-2 '
          href='/container-component'
        >
          Container Component
        </Link>

        <Link
          className='hover:bg-slate-300 p-2 '
          href='/hoc'
        >
          HeigerOrderComponent
        </Link>
      </nav>
    </header>
  );
}
