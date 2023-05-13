import { FC, ReactNode } from 'react';

interface RegularListProps<T> {
  items: T[];
  resourceName: string;
  itemComponent: FC<{ key: string; resourceName: string }>;
}
//asdasdasdasdasd
export function RegularList<T>(props: RegularListProps<T>): JSX.Element {
  const { items, resourceName, itemComponent: ItemComponent } = props;
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent
          key={crypto.randomUUID()}
          resourceName={resourceName}
        />
      ))}
    </>
  );
}
