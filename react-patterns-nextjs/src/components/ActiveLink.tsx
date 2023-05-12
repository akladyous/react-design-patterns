'use client';
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
  usePathname,
} from 'next/navigation';

type Segments = string[] | null;

export default function ActiveLink() {
  const segment = useSelectedLayoutSegment();
  const segments: Segments = useSelectedLayoutSegments();
  const pathname = usePathname();

  console.log('ActiveLink pathname : '.padEnd(50), pathname);
  console.log('useSelectedLayoutSegment : '.padEnd(50), segment);
  console.log('useSelectedLayoutSegment : '.padEnd(50), segments);

  return (
    <div>
      <p>active segment {segment || '/'}</p>
      <ul>
        {segments
          ? segments.map((segment, index) => <li key={index}>{segment}</li>)
          : null}
      </ul>
    </div>
  );
}
