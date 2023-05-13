import NavLink from '@/ui/NavLink';
const _routes: string[] = [
  'albums',
  'comments',
  'photos',
  'posts',
  'todos',
  'users',
];

export default function NavBar() {
  return (
    <header className='border-b h-12 py-2'>
      <nav className=' space-x-4'>
        {_routes.map((route) => (
          <NavLink
            key={crypto.randomUUID()}
            href={`/${route}`}
            className='hover:bg-slate-300 p-2'
          >
            {route.charAt(0).toUpperCase().concat(route.slice(1))}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
