'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import type { LinkProps } from 'next/link';
import {
  usePathname,
  useSearchParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';

interface Props extends LinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string | string[];
}
const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export default function NavLink(props: Props) {
  const { href, children, className } = props || {};
  const searchParams = useSearchParams();
  const segment = useSelectedLayoutSegment();
  const segments = useSelectedLayoutSegments();
  const pathname = usePathname();

  const isActive = href.slice(1) === segment;

  // console.log('href'.padEnd(50), href);
  // console.log('pathname'.padEnd(50), pathname);
  // console.log('segment'.padEnd(50), segment);
  // console.log('segments'.padEnd(50), segments);
  // console.log('isActive'.padEnd(50), isActive);
  // console.log('searchParams'.padEnd(50), searchParams);
  // console.log('-'.repeat(50));

  useEffect(() => {
    // console.log('searchParams : ', searchParams);
    // console.log('pathname     : ', pathname);
  }, [searchParams, pathname]);
  return (
    <>
      <Link
        href={href}
        className={classNames(
          isActive ? 'bg-gray-100 underline' : '',
          'text-gray-900 hover:bg-blue-400 p-2 rouned-lg',
        )}
      >
        {children}
      </Link>
    </>
  );
}
