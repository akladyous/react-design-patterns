import { FC, ReactNode } from 'react';

interface RegularListProps<T> {
  items: T[];
  resourceName: string;
  itemComponent: FC<{ key: string; resourceName: string }>;
}

interface Items<T> {
  items: T[];
}
interface ListItemProps {
  key: string;
  resourceName: string;
}
interface ListItemsProps<T> extends ListItemProps, Items<T> {
  itemComponent: FC<ListItemProps>;
}

export function RegularList<T>(props: ListItemsProps<User>) {
  const { items, resourceName, itemComponent: Item } = props;
  return (
    <>
      {items.map((item) => (
        <Item
          key={crypto.randomUUID()}
          resourceName={resourceName}
          {...{ [resourceName]: item }}
        />
      ))}
    </>
  );
}

export function RegularList2<T>(props: RegularListProps<T>): JSX.Element {
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
