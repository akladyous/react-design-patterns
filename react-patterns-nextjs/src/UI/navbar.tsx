import NavLink from './NavLink';

export default function NavBar() {
  return (
    <header className='border-b h-12 py-2'>
      <nav className=' space-x-4'>
        <NavLink
          href='/'
          className='hover:bg-slate-300 p-2'
        >
          Home
        </NavLink>
        <NavLink
          className='hover:bg-slate-300 p-2 '
          href='/posts'
        >
          Posts
        </NavLink>
        <NavLink
          className='hover:bg-slate-300 p-2 '
          href='/tags'
        >
          Tags
        </NavLink>
        {/* ----- */}
        <NavLink
          className='hover:bg-slate-300 p-2 '
          href='/about'
        >
          about
        </NavLink>

        <NavLink
          className='hover:bg-slate-300 p-2 '
          href='/counter'
        >
          counter
        </NavLink>

        <NavLink
          className='hover:bg-slate-300 p-2 '
          href='/users'
        >
          Users
        </NavLink>
      </nav>
    </header>
  );
}
